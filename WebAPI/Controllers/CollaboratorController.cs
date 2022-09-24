using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
using WebAPI.Repositories;

namespace WebAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CollaboratorController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public CollaboratorController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet("GetAllCollaborators")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public ActionResult<IEnumerable<Collaborator>> Get()
        {
            var list = _unitOfWork.Collaborators.GetAll().ToList();

            if (list.Count == 0)
            {
                return NotFound();
            }

            return list;
        }

        [HttpGet("GetCollaboratorByEmail")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public ActionResult<Collaborator> GetCollaboratorByEmail(string email)
        {
            var entity = _unitOfWork.Collaborators.GetById(email);

            if (entity == null)
            {
                return NotFound();
            }

            return entity;
        }

        [HttpPost("CreateCollaborator")]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        public ActionResult CreateCollaborator(Collaborator Collaborator)
        {
            var entity = new Collaborator()
            {
                Email = Collaborator.Email,
                Password = Collaborator.Password,
                OrganizationName = Collaborator.OrganizationName,
                AdministratorId = Collaborator.AdministratorId,
            };

            try
            {
                _unitOfWork.Collaborators.Create(entity);
                _unitOfWork.Save();
            }
            catch (Exception e)
            {
                return BadRequest();
            }

            //In this code path, the Volunteer object is provided in the response body. A Location response header containing the newly created product's URL is provided.
            return CreatedAtAction(nameof(GetCollaboratorByEmail), new { Email = entity.Email }, entity);
        }

        [HttpPut("UpdateCollaborator")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public ActionResult UpdateCollaborator(Collaborator Collaborator)
        {
            var entity = _unitOfWork.Collaborators.GetById(Collaborator.Email);

            entity.Email = Collaborator.Email;
            entity.Password = Collaborator.Password;
            entity.OrganizationName = Collaborator.OrganizationName;
            entity.AdministratorId = Collaborator.AdministratorId;

            _unitOfWork.Collaborators.Update(entity);
            _unitOfWork.Save();

            return Ok();
        }

        [HttpDelete("DeleteCollaborator")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public ActionResult DeleteCollaborator(string email)
        {
            var entity = _unitOfWork.Collaborators.GetById(email);
            if (entity == null)
            {
                return NotFound();
            }

            _unitOfWork.Collaborators.Delete(entity);
            _unitOfWork.Save();

            return Ok();
        }
    }
}
