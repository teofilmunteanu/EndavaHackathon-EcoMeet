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
    public class OrganizerController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public OrganizerController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet("GetAllOrganizers")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public ActionResult<IEnumerable<Organizer>> Get()
        {
            var list = _unitOfWork.Organizers.GetAll().ToList();

            if (list.Count == 0)
            {
                return NotFound();
            }

            return list;
        }


        [HttpGet("GetOrganizerByEmail")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public ActionResult<Organizer> GetOrganizerByEmail(string email)
        {
            var entity = _unitOfWork.Organizers.GetById(email);

            if (entity == null)
            {
                return NotFound();
            }

            return entity;
        }


        [HttpPost("CreateOrganizer")]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        public ActionResult CreateOrganizer(Organizer Organizer)
        {
            var entity = new Organizer()
            {
                Email = Organizer.Email,
                Password = Organizer.Password,
                OrganizationName = Organizer.OrganizationName,
                City = Organizer.City,
                AdministratorEmail = Organizer.AdministratorEmail,
            };

            try
            {
                _unitOfWork.Organizers.Create(entity);
                _unitOfWork.Save();
            }
            catch (Exception e)
            {
                return BadRequest();
            }
            //posibil tb modificat?


            //In this code path, the Volunteer object is provided in the response body. A Location response header containing the newly created product's URL is provided.
            return CreatedAtAction(nameof(GetOrganizerByEmail), new { Email = entity.Email }, entity);
        }


        //de retusat
        [HttpPut("UpdateUserInfo")]
        [ProducesResponseType(200)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public ActionResult UpdateUser(Organizer Organizer)
        {
            var entity = _unitOfWork.Organizers.GetById(Organizer.Email);
            entity.Email = Organizer.Email;
            entity.Password = Organizer.Password;
            entity.OrganizationName = Organizer.OrganizationName;
            entity.City = Organizer.City;
            entity.AdministratorEmail = Organizer.AdministratorEmail;
            _unitOfWork.Organizers.Update(entity);
            _unitOfWork.Save();

            return Ok();
        }

        [HttpDelete("DeleteVolunteer")]
        [ProducesResponseType(200)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public ActionResult DeleteOrganizer(string email)
        {
            var entity = _unitOfWork.Organizers.GetById(email);
            if (entity == null)
            {
                return NotFound();
            }
            _unitOfWork.Organizers.Delete(entity);
            _unitOfWork.Save();

            return Ok();
        }

    }
}
