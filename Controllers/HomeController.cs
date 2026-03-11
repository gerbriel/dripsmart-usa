using Microsoft.AspNetCore.Mvc;

namespace IrrigationSite.Controllers;

public class HomeController : Controller
{
    [Route("/")]
    public IActionResult Index() => View("~/Views/home.cshtml");

    [Route("/agriculture")]
    public IActionResult Agriculture() => View("~/Views/Agriculture/Index.cshtml");

    [Route("/agriculture/precision-irrigation")]
    public IActionResult PrecisionIrrigation() => View("~/Views/Agriculture/PrecisionIrrigation.cshtml");

    [Route("/digital-farming")]
    public IActionResult DigitalFarming() => View("~/Views/DigitalFarming/Index.cshtml");

    [Route("/growers-stories")]
    public IActionResult GrowerStories() => View("~/Views/GrowerStories/Index.cshtml");

    [Route("/about")]
    public IActionResult About() => View("~/Views/About/Index.cshtml");

    [Route("/contact")]
    public IActionResult Contact() => View("~/Views/Contact/Index.cshtml");

    [Route("/resources")]
    public IActionResult Resources() => View("~/Views/Resources/Index.cshtml");

    // Industries
    [Route("/landscape")]
    public IActionResult Landscape() => View("~/Views/Industries/Landscape.cshtml");

    [Route("/greenhouse")]
    public IActionResult Greenhouse() => View("~/Views/Industries/Greenhouse.cshtml");

    [Route("/wastewater")]
    public IActionResult Wastewater() => View("~/Views/Industries/Wastewater.cshtml");

    [Route("/mining")]
    public IActionResult Mining() => View("~/Views/Industries/Mining.cshtml");

    [Route("/recycling")]
    public IActionResult Recycling() => View("~/Views/Industries/Recycling.cshtml");

    // Find a Dealer
    [Route("/find-a-dealer")]
    public IActionResult FindADealer() => View("~/Views/FindADealer/Index.cshtml");

    // News
    [Route("/news")]
    public IActionResult News() => View("~/Views/News/Index.cshtml");

    // Financial Solutions
    [Route("/financial-solutions")]
    public IActionResult FinancialSolutions() => View("~/Views/FinancialSolutions/Index.cshtml");

    // Crops hub
    [Route("/agriculture/crops")]
    public IActionResult Crops() => View("~/Views/Agriculture/Crops.cshtml");

    // Crop detail pages
    [Route("/agriculture/crops/alfalfa")]
    public IActionResult CropAlfalfa() => View("~/Views/Agriculture/Crops/Alfalfa.cshtml");

    [Route("/agriculture/crops/almonds")]
    public IActionResult CropAlmonds() => View("~/Views/Agriculture/Crops/Almonds.cshtml");

    [Route("/agriculture/crops/citrus")]
    public IActionResult CropCitrus() => View("~/Views/Agriculture/Crops/Citrus.cshtml");

    [Route("/agriculture/crops/corn")]
    public IActionResult CropCorn() => View("~/Views/Agriculture/Crops/Corn.cshtml");

    [Route("/agriculture/crops/cotton")]
    public IActionResult CropCotton() => View("~/Views/Agriculture/Crops/Cotton.cshtml");

    [Route("/agriculture/crops/soybeans")]
    public IActionResult CropSoybeans() => View("~/Views/Agriculture/Crops/Soybeans.cshtml");

    [Route("/agriculture/crops/strawberries")]
    public IActionResult CropStrawberries() => View("~/Views/Agriculture/Crops/Strawberries.cshtml");

    [Route("/agriculture/crops/grapes")]
    public IActionResult CropGrapes() => View("~/Views/Agriculture/Crops/Grapes.cshtml");

    [Route("/agriculture/crops/peanuts")]
    public IActionResult CropPeanuts() => View("~/Views/Agriculture/Crops/Peanuts.cshtml");

    // Agriculture sub-pages
    [Route("/agriculture/drip-irrigation")]
    public IActionResult DripIrrigation() => View("~/Views/Agriculture/DripIrrigation.cshtml");

    [Route("/agriculture/sustainable")]
    public IActionResult Sustainable() => View("~/Views/Agriculture/Sustainable.cshtml");

    // Products
    [Route("/products")]
    public IActionResult Products() => View("~/Views/Products/Index.cshtml");

    [Route("/products/driplines")]
    public IActionResult ProductDriplines() => View("~/Views/Products/Driplines.cshtml");

    [Route("/products/sprinklers")]
    public IActionResult ProductSprinklers() => View("~/Views/Products/Sprinklers.cshtml");

    [Route("/products/filters")]
    public IActionResult ProductFilters() => View("~/Views/Products/Filters.cshtml");

    [Route("/products/drippers")]
    public IActionResult ProductDrippers() => View("~/Views/Products/Drippers.cshtml");

    [Route("/products/connectors")]
    public IActionResult ProductConnectors() => View("~/Views/Products/Connectors.cshtml");

    // Digital Farming sub-pages
    [Route("/digital-farming/dripsphere-os")]
    public IActionResult DripSphereOS() => View("~/Views/DigitalFarming/DripSphereOS.cshtml");

    [Route("/digital-farming/fertigation")]
    public IActionResult Fertigation() => View("~/Views/DigitalFarming/Fertigation.cshtml");
}
