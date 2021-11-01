using GymWebApp.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace GymWebApp.Data
{
    public class DataContext : DbContext
    {
        public DbSet<Client> Clients { get; set; }
        public DbSet<Hall> Halls { get; set; }
        public DbSet<Personal> Personals { get; set; }
        public DbSet<Rate> Rates { get; set; }
        public DbSet<Schedule> Schedules { get; set; }
        public DbSet<Subscription> Subscriptions { get; set; }
        public DbSet<Trainer> Trainers { get; set; }
        public DbSet<Visit> Visits { get; set; }

        private string _connectionString;

        public DataContext(string connectionString)
        {
            _connectionString = connectionString;
            Database.EnsureCreated();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder
                .UseLazyLoadingProxies()
                .UseSqlServer(_connectionString);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Hall>().HasData(
                new Hall[]
                {
                    new Hall { Id=1, Name="Зал 1"},
                    new Hall { Id=2, Name="Зал 2"},
                    new Hall { Id=3, Name="Зал 3"}
                });

            modelBuilder.Entity<Trainer>().HasData(
                new Trainer[]
                {
                    new Trainer { Id=1, Name="Tom", HallId = 1},
                    new Trainer { Id=2, Name="Alice", HallId = 2}
                });
        }

    }

}

