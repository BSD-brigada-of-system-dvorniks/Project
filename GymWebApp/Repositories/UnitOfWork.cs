using GymWebApp.Data;
using GymWebApp.Models;

namespace GymWebApp.Repositories
{
    public class UnitOfWork
    {
        private readonly DataContext _context;
        private Repository<Client> _clients;
        private Repository<Trainer> _trainers;
        private Repository<Hall> _hall;

        public UnitOfWork(string connectionString)
        {
            _context = new DataContext(connectionString);
        }

        public Repository<Trainer> TrainerRepository
        {
            get
            {

                if (this._trainers == null)
                {
                    this._trainers = new Repository<Trainer>(_context);
                }
                return _trainers;
            }
        }

        public Repository<Client> ClientRepository
        {
            get
            {

                if (this._clients == null)
                {
                    this._clients = new Repository<Client>(_context);
                }
                return _clients;
            }
        }

        public Repository<Hall> HallRepository
        {
            get
            {

                if (this._hall == null)
                {
                    this._hall = new Repository<Hall>(_context);
                }
                return _hall;
            }
        }

        public void Save()
        {
            _context.SaveChanges();
        }
    }
}
