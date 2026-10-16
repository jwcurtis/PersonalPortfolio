using System.ComponentModel.DataAnnotations;

namespace PersonalPortfolio.Server.Models
{
    public class Contacts
    {
        [Key]
        public int ContactId { get; set; }
        public string ContactName { get; set; } = string.Empty;
        public string ContactType { get; set; } = string.Empty;
        public string ContactValue { get; set; } = string.Empty;

    }
}
