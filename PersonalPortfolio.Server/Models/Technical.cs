using System.ComponentModel.DataAnnotations;
namespace PersonalPortfolio.Server.Models
{
    public class Technical
    {
        [Key]
        public int TechnicalId { get; set; }
        public string TechnicalName { get; set; } = string.Empty;
        public string TechnicalType { get; set; } = string.Empty;
        public string TechnicalDescription { get; set; } = string.Empty;

    }
}