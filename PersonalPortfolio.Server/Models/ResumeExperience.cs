using System.ComponentModel.DataAnnotations;
namespace PersonalPortfolio.Server.Models
{
    public class ResumeExperience
    {
        [Key]
        public int JobId { get; set; }

        public string JobCompany { get; set; } = string.Empty;

        public string JobTitle { get; set; } = string.Empty;

        public string JobLocation { get; set; } = string.Empty;

        public string JobDescription { get; set; } = string.Empty;

        public DateOnly DateStarted { get; set; }

        public DateOnly? DateEnded { get; set; }
    }
}