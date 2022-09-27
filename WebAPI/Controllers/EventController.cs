using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
using WebAPI.Repositories;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public EventController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: <EventController>/GetEvents
        [HttpGet("GetEvents")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public ActionResult<IEnumerable<Event>> Get()
        {
            var list = _unitOfWork.Events.GetAll().ToList();

            if (list.Count == 0)
            {
                return NotFound();
            }

            return list;
        }

        // GET <EventController>/GetEvent/5
        [HttpGet("GetEvent/{id}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public ActionResult<Event> GetEventById(int id)
        {
            var entity = _unitOfWork.Events.GetById(id);

            if (entity == null)
            {
                return NotFound();
            }

            return entity;
        }

        //If points given isn't given(for use in the API only), calculate amount
        // POST <EventController>/CreateEvent
        [HttpPost("CreateEvent")]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        public ActionResult CreateEvent([FromBody] Event _event)
        {
            int generatedPointsGiven = _event.PointsGiven != null ? 
                (int)_event.PointsGiven : 
                (_event.DateEnd - _event.DateStart).Hours *(_event.ScheduleEnd-_event.ScheduleStart).Hours;

            var entity = new Event()
            {
                Id = _event.Id,
                Title = _event.Title,
                Location = _event.Location,
                Description = _event.Description,
                PointsGiven = generatedPointsGiven,
                Type = _event.Type,
                MaxParticipants = _event.MaxParticipants,
                DateStart = _event.DateStart,
                DateEnd = _event.DateEnd,
                ScheduleStart = _event.ScheduleStart,
                ScheduleEnd = _event.ScheduleEnd,
                Sponsors = _event.Sponsors,
                OrganizerEmail = _event.OrganizerEmail
            };

            try
            {
                _unitOfWork.Events.Create(entity);
                _unitOfWork.Save();
            }
            catch (Exception e)
            {
                return BadRequest();
            }


            //In this code path, the Volunteer object is provided in the response body. A Location response header containing the newly created product's URL is provided.
            return CreatedAtAction(nameof(GetEventById), new { Id = entity.Id }, entity);
        }

        // PUT <EventController>/UpdateEvent
        [HttpPut("UpdateEvent")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public ActionResult UpdateEvent([FromBody] Event _event)
        {
            int generatedPointsGiven = _event.PointsGiven != null ?
               (int)_event.PointsGiven :
               (_event.DateEnd - _event.DateStart).Hours * (_event.ScheduleEnd - _event.ScheduleStart).Hours;

            var entity = _unitOfWork.Events.GetById(_event.Id);

            entity.Title = _event.Title;
            entity.Location = _event.Location;
            entity.Description = _event.Description;
            entity.PointsGiven = generatedPointsGiven;
            entity.Type = _event.Type;
            entity.MaxParticipants = _event.MaxParticipants;
            entity.DateStart = _event.DateStart;
            entity.DateEnd = _event.DateEnd;
            entity.ScheduleStart = _event.ScheduleStart;
            entity.ScheduleEnd = _event.ScheduleEnd;
            entity.Sponsors = _event.Sponsors;//can be null
            entity.OrganizerEmail = _event.OrganizerEmail;

            _unitOfWork.Events.Update(entity);
            _unitOfWork.Save();

            return Ok();
        }

        // DELETE <EventController>/DeleteEvent/5
        [HttpDelete("DeleteEvent/{id}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public ActionResult Delete(int id)
        {
            var entity = _unitOfWork.Events.GetById(id);

            if (entity == null)
            {
                return NotFound();
            }

            _unitOfWork.Events.Delete(entity);
            _unitOfWork.Save();

            return Ok();
        }
    }
}
