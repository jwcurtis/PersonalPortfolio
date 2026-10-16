using System.ComponentModel.DataAnnotations;
namespace PersonalPortfolio.Server.Models
{
    public class Education
    {
        [Key]
        public int EducationId { get; set; }
        public string School { get; set; } = string.Empty;
        public string Degree { get; set; } = string.Empty;
        public string FieldOfStudy { get; set; } = string.Empty;
        public string Honors { get; set; } = string.Empty;
        public DateTime DateAwarded { get; set; }

    }
}
