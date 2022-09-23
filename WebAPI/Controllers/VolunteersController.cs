using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using WebAPI.Data;
using WebAPI.Models;
using WebAPI.Repositories;

namespace WebAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class VolunteerController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public VolunteerController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        
        [HttpGet("GetAllVolunteers")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public ActionResult<IEnumerable<Volunteer>> Get()
        {
            var list = _unitOfWork.Volunteers.GetAll().ToList();

            if (list.Count == 0)
            {
                return NotFound();
            }

            return list;
        }

        
        [HttpGet("GetVolunteerByEmail")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public ActionResult<Volunteer> GetVolunteerByEmail(string email)
        {
            var entity = _unitOfWork.Volunteers.GetById(email);

            if (entity == null)
            {
                return NotFound();
            }

            return entity;
        }

        [HttpPost("CreateVolunteer")]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        public ActionResult CreateVolunteer(Volunteer volunteer)
        {
            var entity = new Volunteer()
            {
                Email = volunteer.Email,
                Password = volunteer.Password,
                Username = volunteer.Username,
                FirstName = volunteer.FirstName,
                LastName = volunteer.LastName,
                City = volunteer.City,
            };

            try
            {
                _unitOfWork.Volunteers.Create(entity);
                _unitOfWork.Save();
            }
            catch(Exception e)
            {
                return BadRequest();
            }
            //posibil tb modificat?


            //In this code path, the Volunteer object is provided in the response body. A Location response header containing the newly created product's URL is provided.
            return CreatedAtAction(nameof(GetVolunteerByEmail), new { Email = entity.Email }, entity);
        }

        
        //de retusat
        [HttpPut("UpdateUserInfo")]
        [ProducesResponseType(200)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public ActionResult UpdateUser(Volunteer volunteer)
        {
            var entity = _unitOfWork.Volunteers.GetById(volunteer.Email);
            entity.Password = volunteer.Password;
            entity.Username = volunteer.Username;
            entity.FirstName = volunteer.FirstName;
            entity.LastName = volunteer.LastName;
            entity.City = volunteer.City;
            entity.Level = volunteer.Level;
            entity.Points = volunteer.Points;

            _unitOfWork.Volunteers.Update(entity);
            _unitOfWork.Save();

            return Ok();
        }

        //nefunctional - posibil de la generic repo?
        [HttpDelete("DeleteVolunteer/{Email}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public ActionResult DeleteVolunteer(string email)
        {
            var entity = _unitOfWork.Volunteers.GetById(email);
            _unitOfWork.Volunteers.Delete(entity);
            _unitOfWork.Save();

            return Ok();
        }
        
    }
}
