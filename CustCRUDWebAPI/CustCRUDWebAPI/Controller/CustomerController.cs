using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using CustCRUDWebAPI.Models;
using System.IO;
using Microsoft.AspNetCore.Hosting;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CustCRUDWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public CustomerController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        // GET: api/<CustomerController>
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"SELECT Id, Name, Phone, Email, CompanyName FROM [CustomerDB].[dbo].[Customer]";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("CustCRUDDbConnection");
            SqlDataReader reader;
            using (SqlConnection con = new SqlConnection(sqlDataSource))
            {
                con.Open();
                using (SqlCommand myCommand = new SqlCommand(query, con))
                {
                    reader = myCommand.ExecuteReader();
                    table.Load(reader);

                    reader.Close();
                    con.Close();
                }
            }
            return new JsonResult(table);
        }

        // POST api/<CustomerController>
        [HttpPost]
        public JsonResult Post(Customer cust)
        {
            string query = @"
                    insert into dbo.Customer 
                    (Name,Phone,Email,CompanyName)
                    values 
                    (
                     '" + cust.Name + @"'
                    ,'" + cust.Phone + @"'
                    ,'" + cust.Email + @"'
                    ,'" + cust.CompanyName + @"'
                    )";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("CustCRUDDbConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }

        // PUT api/<CustomerController>/5
        [HttpPut]
        public JsonResult Put(Customer cust)
        {
            string query = @"
                    update dbo.Customer set 
                     Name = '" + cust.Name + @"'
                    ,Phone = '" + cust.Phone + @"'
                    ,Email = '" + cust.Email + @"'
                    ,CompanyName = '" + cust.CompanyName + @"'
                     where Id = '" + cust.Id + @"'
                    "; //
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("CustCRUDDbConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }

        // DELETE api/<CustomerController>/5
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"delete from dbo.Customer where Id = " + id + @"";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("CustCRUDDbConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }

        [Route("GetAllCompanyNames")]
        [ApiExplorerSettings(IgnoreApi = true)]
        public JsonResult GetAllCompanyNames()
        {
            string query = @"
                    select CompanyName from dbo.Company
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("CustCRUDDbConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }
    }
}

