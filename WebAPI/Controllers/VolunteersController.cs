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
        
        [HttpGet("GetAll")]
        public IEnumerable<Volunteer> Get()
        {
            return _unitOfWork.Volunteers.GetAll();
        }

        /*
        [HttpGet("GetUserById")]
        public async Task<ActionResult<Volunteer>> GetUserById(string email)
        {
            Volunteer User = await DBContext.Volunteers.Select(s => new Volunteer
            {
                Email = s.Email,
                Password = s.Password,
                Username = s.Username,
                FirstName = s.FirstName,
                LastName = s.LastName,
                City = s.City,
                Level = s.Level,
                Points = s.Points

            }).FirstOrDefaultAsync(s => s.Email == email);
            if (User == null)
            {
                return NotFound();
            }
            else
            {
                return User;
            }
        }

        [HttpPost("InsertVolunteer")]
        public async Task<HttpStatusCode> InsertUser(Volunteer volunteer)
        {
            var entity = new Volunteer()
            {
                Email = volunteer.Email,
                Password = volunteer.Password,
                Username = volunteer.Username,
                FirstName = volunteer.FirstName,
                LastName = volunteer.LastName,
                City = volunteer.City,
                Level = volunteer.Level,
                Points = volunteer.Points
            };
            DBContext.Volunteers.Add(entity);
            await DBContext.SaveChangesAsync();
            return HttpStatusCode.Created;
        }

        [HttpPut("UpdateUserInfo")]
        public async Task<HttpStatusCode> UpdateUser(Volunteer volunteer)
        {
            var entity = await DBContext.Volunteers.FirstOrDefaultAsync(s => s.Email == volunteer.Email);
            entity.Password = volunteer.Password;
            entity.Username = volunteer.Username;
            entity.FirstName = volunteer.FirstName;
            entity.LastName = volunteer.LastName;
            entity.City = volunteer.City;
            entity.Level = volunteer.Level;
            entity.Points = volunteer.Points;
            await DBContext.SaveChangesAsync();
            return HttpStatusCode.OK;
        }

        [HttpDelete("DeleteUser/{Id}")]
        public async Task<HttpStatusCode> DeleteUser(string email)
        {
            var entity = new Volunteer()
            {
                Email = email
            };
            DBContext.Volunteers.Attach(entity);
            DBContext.Volunteers.Remove(entity);
            await DBContext.SaveChangesAsync();
            return HttpStatusCode.OK;
        }
        */
    }
}
