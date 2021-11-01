using System;

namespace GymWebApp.Models
{
    public class Schedule
    {
        public int Id { get; set; }
        public int PersonalId { get; set; }
        public virtual Personal Personal { get; set; }
        public int HallId { get; set; }
        public virtual Hall Hall { get; set; }
        public bool Status { get; set; }
        public DateTime DateToday { get; set; }
    }

}
