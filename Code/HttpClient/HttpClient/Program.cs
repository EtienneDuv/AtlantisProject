using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace HttpClientSample
{
    public class Metric
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Value { get; set; }
        public DateTime Date { get; set; }
    }


    class Program
    {
        static HttpClient client = new HttpClient();

        static async Task<string> GetMetricAsync(string uri)
        {
            var response = await client.GetAsync(uri);
            response.EnsureSuccessStatusCode();

            string content = await response.Content.ReadAsStringAsync();
            return content;
        }

        static async Task<HttpResponseMessage> PostMetricAsync(string uri, Metric metric)
        {
            var response = await client.PostAsJsonAsync(uri, metric);
            response.EnsureSuccessStatusCode();

            // return URI of the created resource.
            return response;
        }

        static async Task<HttpResponseMessage> PostTestAsync(string uri, int metric)
        {
            var response = await client.PostAsJsonAsync(uri, metric);
            response.EnsureSuccessStatusCode();

            // return URI of the created resource.
            return response;
        }

        //static void ShowProduct(Product product)
        //{
        //    Console.WriteLine($"Name: {product.Name}\tPrice: " +
        //        $"{product.Price}\tCategory: {product.Category}");
        //}

        //static async Task<Uri> CreateProductAsync(Product product)
        //{
        //    HttpResponseMessage response = await client.PostAsJsonAsync(
        //        "api/products", product);
        //    response.EnsureSuccessStatusCode();

        //    // return URI of the created resource.
        //    return response.Headers.Location;
        //}

        //static async Task<Product> GetProductAsync(string path)
        //{
        //    Product product = null;
        //    HttpResponseMessage response = await client.GetAsync(path);
        //    if (response.IsSuccessStatusCode)
        //    {
        //        product = await response.Content.ReadAsAsync<Product>();
        //    }
        //    return product;
        //}

        //static async Task<Product> UpdateProductAsync(Product product)
        //{
        //    HttpResponseMessage response = await client.PutAsJsonAsync(
        //        $"api/products/{product.Id}", product);
        //    response.EnsureSuccessStatusCode();

        //    // Deserialize the updated product from the response body.
        //    product = await response.Content.ReadAsAsync<Product>();
        //    return product;
        //}

        //static async Task<HttpStatusCode> DeleteProductAsync(string id)
        //{
        //    HttpResponseMessage response = await client.DeleteAsync(
        //        $"api/products/{id}");
        //    return response.StatusCode;
        //}

        static void Main()
        {
            RunAsync().GetAwaiter().GetResult();
        }

        static async Task RunAsync()
        {
            string uri = "http://localhost:8000/postmetric";

            //var r = await GetMetricAsync(uri);
            //Console.WriteLine(r);

            //Console.ReadLine();

            //Random random = new Random();

            //for (var i = 0; i < 100; i++)
            //{
            //    Metric m = new Metric();
            //    m.Id = 1;
            //    m.Date = DateTime.Now;
            //    m.Name = "Humidity";
            //    m.Value = (random.NextDouble() * (90 - 20) + 20);

            //    var t = await PostMetricAsync(uri, m);
            //    Console.WriteLine("Sent value: " + m.Value);
            //}

            for (var i = 0; i < 100; i++)
            {
                var t = await PostTestAsync(uri, 41);
                Console.WriteLine("Value sent");
            }

            Console.ReadLine();
        }
    }
}