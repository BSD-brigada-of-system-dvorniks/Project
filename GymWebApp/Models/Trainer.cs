using System.Collections.Generic;

namespace GymWebApp.Models
{
    public class Trainer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surmame { get; set; }
        public string MiddleName { get; set; }
        public string ContactPhone { get; set; }
        public string Address { get; set; }
        public string Passport { get;set; }
        public int HallId { get; set; }
        public virtual Hall Hall { get; set; }
        public virtual ICollection<Client> Clients { get; set; }
        public Trainer()
        {
            Clients = new List<Client>();
        }
    }
}
