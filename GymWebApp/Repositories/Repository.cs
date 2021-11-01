using System;
using System.Collections.Generic;
using System.Linq;
using GymWebApp.Data;
using Microsoft.EntityFrameworkCore;

namespace GymWebApp.Repositories
{
    public class Repository<T> where T : class
    {
        private DataContext _dataContext;
        private DbSet<T> _dbSet;

        public Repository(DataContext context)
        {
            _dataContext = context;
            _dbSet = context.Set<T>();
        }

        public IEnumerable<T> GetAll()
        {
            return _dbSet.ToArray();
        }

        public T GetById(object id)
        {
            return _dbSet.Find(id);
        }

        public void Add(T item)
        {
            if (item == null)
                throw new NullReferenceException();

            _dbSet.Add(item);
        }

        public void Update(T item)
        {
            if (item == null)
                throw new NullReferenceException();

            _dbSet.Update(item);
        }

        public void Delete(T item)
        {
            _dbSet.Remove(item);
        }
    }
}