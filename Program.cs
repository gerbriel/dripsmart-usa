// Railway injects PORT — map it to ASPNETCORE_URLS before builder starts
var port = Environment.GetEnvironmentVariable("PORT");
if (!string.IsNullOrEmpty(port))
    Environment.SetEnvironmentVariable("ASPNETCORE_URLS", $"http://0.0.0.0:{port}");

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();

builder.CreateUmbracoBuilder()
    .AddBackOffice()
    .AddWebsite()
    .AddComposers()
    .Build();

WebApplication app = builder.Build();

await app.BootUmbracoAsync();

// Standard ASP.NET Core static files and routing — runs BEFORE Umbraco
app.UseStaticFiles();
app.UseRouting();

// Map all our MVC controller routes first, before Umbraco gets a chance
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

// Umbraco backoffice only — website middleware removed so it doesn't catch our routes
app.UseUmbraco()
    .WithMiddleware(u =>
    {
        u.UseBackOffice();
    })
    .WithEndpoints(u =>
    {
        u.UseBackOfficeEndpoints();
    });

await app.RunAsync();
