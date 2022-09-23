using Microsoft.AspNetCore.Mvc;
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

        [HttpGet("GetAllAchievements")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public ActionResult<IEnumerable<Achievement>> Get()
        {
            var list = _unitOfWork.Achievements.GetAll().ToList();

            if (list.Count == 0)
            {
                return NotFound();
            }

            return list;
        }

    }
}
