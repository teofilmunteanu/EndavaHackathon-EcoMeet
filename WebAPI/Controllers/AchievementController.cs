﻿using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
using WebAPI.Repositories;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AchievementController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public AchievementController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: <AchievementController>/GetAchievements
        [HttpGet("GetAchievements")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public ActionResult<IEnumerable<Achievement>> Get()
        {
            var list = _unitOfWork.Achievements.GetAll().ToList();

            if (list.Count == 0)
            {
                return NotFound();
            }

            return list;
        }

        // GET <AchievementController>/GetAchievement/5
        [HttpGet("GetAchievement/{id}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public ActionResult<Achievement> GetAchievementById(int id)
        {
            var entity = _unitOfWork.Achievements.GetById(id);

            if (entity == null)
            {
                return NotFound();
            }

            return entity;
        }

        // POST <AchievementController>/CreateAchievement
        [HttpPost("CreateAchievement")]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        public ActionResult CreateAchievement(Achievement achievement)
        {
            var entity = new Achievement()
            {
                Id = achievement.Id,
                Title = achievement.Title,
                Date = achievement.Date,
                Description = achievement.Description,
                VolunteerEmail = achievement.VolunteerEmail
            };

            try
            {
                _unitOfWork.Achievements.Create(entity);
                _unitOfWork.Save();
            }
            catch (Exception e)
            {
                return BadRequest();
            }

            //In this code path, the Volunteer object is provided in the response body. A Location response header containing the newly created product's URL is provided.
            return CreatedAtAction(nameof(GetAchievementById), new { Id = entity.Id }, entity);
        }

        // DELETE <EventController>/DeleteAchievement/5
        [HttpDelete("DeleteEvent/{id}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public ActionResult Delete(int id)
        {
            var entity = _unitOfWork.Achievements.GetById(id);

            if (entity == null)
            {
                return NotFound();
            }

            _unitOfWork.Achievements.Delete(entity);
            _unitOfWork.Save();

            return Ok();
        }
    }
}
