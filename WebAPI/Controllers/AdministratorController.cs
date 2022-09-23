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
    public class AdministratorController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public AdministratorController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet("GetAllAdministrators")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public ActionResult<IEnumerable<Administrator>> Get()
        {
            var list = _unitOfWork.Administrators.GetAll().ToList();

            if (list.Count == 0)
            {
                return NotFound();
            }

            return list;
        }


        [HttpGet("GetAdministratorByEmail")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public ActionResult<Administrator> GetAdministratorByEmail(string email)
        {
            var entity = _unitOfWork.Administrators.GetById(email);

            if (entity == null)
            {
                return NotFound();
            }

            return entity;
        }


        [HttpPost("CreateAdministrator")]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        public ActionResult CreateAdministrator(Administrator administrator)
        {
            var entity = new Administrator()
            {
                Email = administrator.Email,
                FirstName = administrator.FirstName,
                LastName = administrator.LastName,
                PhoneNumber = administrator.PhoneNumber,
            };

            try
            {
                _unitOfWork.Administrators.Create(entity);
                _unitOfWork.Save();
            }
            catch (Exception e)
            {
                return BadRequest();
            }
            //posibil tb modificat?


            //In this code path, the Volunteer object is provided in the response body. A Location response header containing the newly created product's URL is provided.
            return CreatedAtAction(nameof(GetAdministratorByEmail), new { Email = entity.Email }, entity);
        }


        //de retusat
        [HttpPut("UpdateUserInfo")]
        [ProducesResponseType(200)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public ActionResult UpdateUser(Administrator Administrator)
        {
            var entity = _unitOfWork.Administrators.GetById(Administrator.Email);
            entity.Email = Administrator.Email;
            entity.FirstName = Administrator.FirstName;
            entity.LastName = Administrator.LastName;
            entity.PhoneNumber = Administrator.PhoneNumber;
            _unitOfWork.Administrators.Update(entity);
            _unitOfWork.Save();

            return Ok();
        }

        [HttpDelete("DeleteVolunteer")]
        [ProducesResponseType(200)]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public ActionResult DeleteAdministrator(string email)
        {
            var entity = _unitOfWork.Administrators.GetById(email);
            if (entity == null)
            {
                return NotFound();
            }
            _unitOfWork.Administrators.Delete(entity);
            _unitOfWork.Save();

            return Ok();
        }

    }
}
