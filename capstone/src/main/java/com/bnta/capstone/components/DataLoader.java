package com.bnta.capstone.components;

import com.bnta.capstone.enums.Category;
import com.bnta.capstone.enums.Colour;
import com.bnta.capstone.enums.Style;
import com.bnta.capstone.enums.Weather;
import com.bnta.capstone.models.Collage;
import com.bnta.capstone.models.User;
import com.bnta.capstone.repositories.CollageRepository;
import com.bnta.capstone.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    CollageRepository collageRepository;

    @Autowired
    UserRepository userRepository;

    public DataLoader(){

    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
//        NIGHT OUT Collages
        Collage collageNO1 = new Collage("Downtown Chic", "Pieces like leather " +
                "jackets, distressed denim, ankle boots, graphic tees, and statement accessories" +
                " like bold necklaces or chandelier earrings.", Category.NIGHT_OUT, Style.CASUAL, Weather.SUNNY,
                Colour.NEUTRAL);

        Collage collageNO2 = new Collage("Glam Squad", "Sequined or metallic dresses, " +
                "stiletto heels, statement clutches, and bold jewelry like chandelier earrings or " +
                "statement necklaces.", Category.NIGHT_OUT, Style.GLAM, Weather.UNKNOWN, Colour.COLOURFUL);

        Collage collageNO3 = new Collage("Club Hopper", "Bodycon dresses, crop tops, " +
                "high-waisted skirts, platform heels, and bold makeup like smokey eyes or bold " +
                "lipstick.", Category.NIGHT_OUT, Style.CASUAL, Weather.UNKNOWN, Colour.WARM);

        Collage collageNO4 = new Collage("Rooftop Romance", "Flowing maxi dresses, " +
                "delicate lace tops, high-waisted trousers, strap sandals, and delicate jewelry like " +
                "stud earrings or delicate necklaces.", Category.NIGHT_OUT, Style.ROMANTIC, Weather.SUNNY,
                Colour.WARM);

        Collage collageNO5 = new Collage("Vintage Vibes", "Retro-inspired pieces like polka " +
                "dot dresses, wide-leg trousers, vintage graphic tees, ankle boots, and funky sunglasses.",
                Category.NIGHT_OUT, Style.CASUAL, Weather.SUNNY, Colour.COLOURFUL);

        Collage collageNO6 = new Collage("Pop Princess", "Playful pieces like neon bodycon " +
                "dresses, graphic tees, platform sneakers, statement belts, and playful hair accessories like " +
                "scrunchies or headbands.", Category.NIGHT_OUT, Style.GLAM, Weather.CLOUDY, Colour.COOL);

        Collage collageNO7 = new Collage("Rockstar Rebel", "Bold and daring pieces like " +
                "leather jackets, studded boots, ripped denim, band tees, and statement jewelry like chunky " +
                "bracelets or necklaces.", Category.NIGHT_OUT, Style.CASUAL, Weather.CLOUDY, Colour.NEUTRAL);

        Collage collageNO8 = new Collage("Classic Elegance",
                "Timeless pieces like little black dresses, pumps, simple clutch bags, and " +
                        "delicate jewelry like pearl earrings or simple bracelets", Category.NIGHT_OUT,
                Style.ELEGANT, Weather.RAINING, Colour.COOL);

        Collage collageNO9 = new Collage("Sophisticated Sparkle",
                "Chic and refined pieces like midi dresses, strap heels, metallic clutch bags, " +
                        "and statement jewelry like crystal drop earrings or layered necklaces.",
                Category.NIGHT_OUT, Style.GLAM, Weather.SNOWING, Colour.NEUTRAL);

        Collage collageNO10 = new Collage("After Dark",
                "Sultry and alluring pieces like bodycon dresses, strap sandals, bold " +
                        "accessories like statement necklaces or cuff bracelets.", Category.NIGHT_OUT,
                Style.GLAM, Weather.UNKNOWN, Colour.COLOURFUL);



//        WEDDING collages
        Collage collageW1 = new Collage("Romantic Lace",
                "Soft and delicate pieces like lace dresses, strap heels, pearl earrings, " +
                        "and simple clutch bags.", Category.WEDDING, Style.ROMANTIC, Weather.CLOUDY,
                Colour.NEUTRAL);

        Collage collageW2 = new Collage("Garden Wedding",
                "Light and airy pieces like floral dresses, strap sandals, dainty " +
                        "accessories like floral hair pins or drop earrings.", Category.WEDDING,
                Style.ELEGANT, Weather.SUNNY, Colour.COLOURFUL);

        Collage collageW3 = new Collage("Black Tie Glam Wedding",
                "Formal and elegant pieces like floor-length gowns, statement heels, " +
                        "beaded clutch bags, and statement jewelry like chandelier earrings " +
                        "or layered necklaces.", Category.WEDDING, Style.GLAM, Weather.RAINING, Colour.NEUTRAL);

        Collage collageW4 = new Collage("Beach Chic",
                "Flowy and breezy pieces like maxi dresses, strap sandals, sun hats, " +
                        "and shell jewelry like bracelets or necklaces.", Category.WEDDING, Style.ELEGANT,
                Weather.SUNNY, Colour.COLOURFUL);

        Collage collageW5 = new Collage("Rustic Charm",
                "Country-inspired pieces like lace dresses, cowboy boots, leather bags, " +
                        "and turquoise jewelry like necklaces or earrings.", Category.WEDDING, Style.CASUAL,
                Weather.SNOWING, Colour.NEUTRAL);

        Collage collageW6 = new Collage("Boho Bliss",
                "Whimsical pieces like crochet dresses, suede ankle boots, flower crowns, " +
                        "and layered jewelry like beaded necklaces or stacked bracelets.", Category.WEDDING,
                Style.CASUAL, Weather.CLOUDY, Colour.NEUTRAL);

        Collage collageW7 = new Collage("Vintage Elegance",
                "Retro-inspired pieces like A-line dresses, kitten heels, vintage clutch bags, " +
                        "and statement jewelry like cocktail rings or brooches.", Category.WEDDING, Style.ELEGANT,
                Weather.UNKNOWN, Colour.COOL);

        Collage collageW8 = new Collage("Modern Minimalism",
                "Clean and sophisticated pieces like slip dresses, mules, simple clutch bags, " +
                        "and delicate jewelry like stud earrings or thin bracelets.", Category.WEDDING, Style.ELEGANT,
                Weather.CLOUDY, Colour.COOL);

        Collage collageW9 = new Collage("Enchanted Forest",
                "Magical pieces like tulle skirts, ballet flats, flower hair clips, " +
                        "and delicate jewelry like fairy-inspired necklaces or bracelets.", Category.WEDDING,
                Style.CASUAL, Weather.RAINING, Colour.WARM);

        Collage collageW10 = new Collage("Golden Glam",
                "Luxurious pieces like metallic dresses, strap heels, gold clutch bags, " +
                        "and statement jewelry like crystal drop earrings or layered necklaces.", Category.WEDDING,
                Style.GLAM, Weather.SNOWING, Colour.WARM);


//        CASUAL collages
        Collage collageC1 = new Collage("Denim Dream",
                "Easy and comfortable pieces like denim jackets, skinny jeans, " +
                        "white sneakers, and simple jewelry like hoop earrings or " +
                        "thin bracelets.", Category.DAY_OUT, Style.CASUAL, Weather.CLOUDY, Colour.NEUTRAL);

        Collage collageC2 = new Collage("Athleisure",
                "Sporty and comfortable pieces like leggings, oversized hoodies, " +
                        "sneakers, and statement accessories like baseball caps or " +
                        "sunglasses.", Category.DAY_OUT, Style.CASUAL, Weather.RAINING, Colour.WARM);

        Collage collageC3 = new Collage("Cozy Knits",
                "Warm and comfortable pieces like oversized sweaters, wool scarves, " +
                        "booties, and simple jewelry like stud earrings or thin necklaces.", Category.DAY_OUT,
                Style.ROMANTIC, Weather.UNKNOWN, Colour.WARM);

        Collage collageC4 = new Collage("Weekend Vibes",
                "Relaxed and easy pieces like t-shirts, shorts, slip-on sneakers, " +
                        "and simple accessories like baseball caps or crossbody bags.", Category.DAY_OUT,
                Style.CASUAL, Weather.SUNNY, Colour.NEUTRAL);

        Collage collageC5 = new Collage("Effortless Chic",
                "Simple and stylish pieces like midi dresses, ankle boots, leather " +
                        "jackets, and delicate jewelry like simple rings or dainty " +
                        "necklaces.", Category.DAY_OUT, Style.SMART, Weather.SNOWING, Colour.WARM);

        Collage collageC6 = new Collage("Bohemian Beauty",
                "Free-spirited pieces like flowy maxi dresses, fringe bags, " +
                        "sandals, and bold jewelry like oversized earrings or " +
                        "chunky bracelets.", Category.DAY_OUT, Style.ROMANTIC, Weather.SUNNY, Colour.WARM);

        Collage collageC7 = new Collage("Preppy Perfection",
                "Classic pieces like collared shirts, chinos, loafers, and simple " +
                        "accessories like watches or belts.", Category.DAY_OUT, Style.ELEGANT, Weather.CLOUDY,
                Colour.COOL);

        Collage collageC8 = new Collage("Tomboy Chic",
                "Androgynous pieces like oversized blazers, ripped jeans, " +
                        "loafers or oxfords, and simple jewelry like stud earrings or " +
                        "thin necklaces.", Category.DAY_OUT, Style.CASUAL, Weather.UNKNOWN, Colour.WARM);

        Collage collageC9 = new Collage("Vintage Vibes",
                "Retro-inspired pieces like high-waisted jeans, graphic tees, " +
                        "platform sandals, and statement accessories like wide brim " +
                        "hats or cat-eye sunglasses.", Category.DAY_OUT, Style.SMART, Weather.RAINING, Colour.WARM);

        Collage collageC10 = new Collage("Eclectic Mix",
                "Unconventional pieces like patterned jumpsuits, combat boots, " +
                        "statement jackets, and bold jewelry like cuff bracelets or " +
                        "multi-layered necklaces.", Category.DAY_OUT, Style.GLAM, Weather.SUNNY, Colour.COLOURFUL);


//        FORMAL collages
        Collage collageF1 = new Collage("Black Tie Glam",
                "Elegant and sophisticated pieces like floor-length gowns, " +
                        "tuxedos, high heels, and statement jewelry like chandelier " +
                        "earrings or diamond necklaces.", Category.FORMAL, Style.SMART, Weather.RAINING,
                Colour.NEUTRAL);

        Collage collageF2 = new Collage("Cocktail Hour",
                "Semi-formal pieces like knee-length dresses, dressy blouses, " +
                        "high heels, and classic jewelry like pearl earrings or " +
                        "simple bracelets.", Category.FORMAL, Style.CASUAL, Weather.SNOWING, Colour.COOL);

        Collage collageF3 = new Collage("Red Carpet Ready",
                "Dramatic and eye-catching pieces like sequin gowns, high slit " +
                        "dresses, strap heels, and statement jewelry like " +
                        "sparkling chokers or stacked bangles.", Category.FORMAL, Style.CASUAL, Weather.CLOUDY,
                Colour.COOL);

        Collage collageF4 = new Collage("Chic and Sleek",
                "Modern and minimalist pieces like tailored suits, sleek " +
                        "dresses, pumps, and delicate jewelry like small hoop " +
                        "earrings or simple necklaces.", Category.FORMAL, Style.SMART, Weather.RAINING,
                Colour.WARM);

        Collage collageF5 = new Collage("Garden Party",
                "Light and airy pieces like flowy maxi dresses, strap sandals, " +
                        "clutch bags, and delicate jewelry like drop earrings or " +
                        "thin bracelets.", Category.FORMAL, Style.ROMANTIC, Weather.UNKNOWN, Colour.WARM);

        Collage collageF6 = new Collage("Afternoon Tea",
                "Ladylike and refined pieces like lace dresses, kitten heels, " +
                        "pearl necklaces, and elegant accessories like silk scarves " +
                        "or clutch bags.", Category.FORMAL, Style.ELEGANT, Weather.SUNNY, Colour.COOL);

        Collage collageF7 = new Collage("Art Gallery Opening",
                "Creative and edgy pieces like asymmetrical dresses, chunky " +
                        "heels, geometric jewelry, and bold accessories like " +
                        "clutch purses or statement hats.", Category.FORMAL, Style.ROMANTIC, Weather.CLOUDY,
                Colour.WARM);

        Collage collageF8 = new Collage("Gala Glam",
                "Opulent and luxurious pieces like beaded gowns, metallic " +
                        "heels, statement earrings, and sparkling bracelets.", Category.FORMAL, Style.GLAM,
                Weather.UNKNOWN, Colour.COLOURFUL);

        Collage collageF9 = new Collage("Winter Wonderland",
                "Festive and cozy pieces like velvet dresses, fur coats, " +
                        "embellished heels, and sparkling jewelry like snowflake " +
                        "earrings or crystal necklaces.", Category.FORMAL, Style.SMART, Weather.SNOWING,
                Colour.NEUTRAL);

        Collage collageF10 = new Collage("Royal Affair",
                "Regal and elegant pieces like ball gowns, tiaras, " +
                        "chandelier earrings, and glamorous accessories like " +
                        "satin gloves or beaded clutches.", Category.FORMAL, Style.ELEGANT, Weather.SUNNY,
                Colour.WARM);

        collageRepository.saveAll(Arrays.asList(collageNO1, collageNO2, collageNO3, collageNO4, collageNO5, collageNO6,
                collageNO7, collageNO8, collageNO9, collageNO10, collageW1, collageW2, collageW3, collageW4, collageW5,
                collageW6, collageW7, collageW8, collageW9, collageW10, collageC1, collageC2, collageC3, collageC4,
                collageC5, collageC6, collageC7, collageC8, collageC9, collageC10, collageF1, collageF2, collageF3,
                collageF4, collageF5, collageF6, collageF7, collageF8, collageF9, collageF10));



//        Users
        User user1 = new User("Aya Hezam", "aya@bnta.com");
        userRepository.save(user1);

        User user2 = new User("Diana Eboh", "diana@bnta.com");
        userRepository.save(user2);

        User user3 = new User("Samra Afzaal", "samra@bnta.com");
        userRepository.save(user3);

        User user4 = new User("Chinika Charles", "chinika@bnta.com");
        userRepository.save(user4);
    }

}
