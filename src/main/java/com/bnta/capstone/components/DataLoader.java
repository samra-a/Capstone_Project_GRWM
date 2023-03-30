package com.bnta.capstone.components;

import com.bnta.capstone.enums.Category;
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
                " like bold necklaces or chandelier earrings can be included in this collage.", Category.NIGHT_OUT);

        Collage collageNO2 = new Collage("Glam Squad", "Sequined or metallic dresses, " +
                "stiletto heels, statement clutches, and bold jewelry like chandelier earrings or " +
                "statement necklaces can be included in this collage.", Category.NIGHT_OUT);

        Collage collageNO3 = new Collage("Club Hopper", "Bodycon dresses, crop tops, " +
                "high-waisted skirts, platform heels, and bold makeup like smokey eyes or bold " +
                "lipstick can be included in this collage.", Category.NIGHT_OUT);

        Collage collageNO4 = new Collage("Rooftop Romance", "Flowing maxi dresses, " +
                "delicate lace tops, high-waisted trousers, strappy sandals, and delicate jewelry like " +
                "stud earrings or delicate necklaces can be included in this collage.", Category.NIGHT_OUT);

        Collage collageNO5 = new Collage("Vintage Vibes", "Retro-inspired pieces like polka " +
                "dot dresses, wide-leg trousers, vintage graphic tees, ankle boots, and funky sunglasses " +
                "can be included in this collage.", Category.NIGHT_OUT);

        Collage collageNO6 = new Collage("Pop Princess", "Playful pieces like neon bodycon " +
                "dresses, graphic tees, platform sneakers, statement belts, and playful hair accessories like " +
                "scrunchies or headbands can be included in this collage.", Category.NIGHT_OUT);

        Collage collageNO7 = new Collage("Rockstar Rebel", "Bold and daring pieces like " +
                "leather jackets, studded boots, ripped denim, band tees, and statement jewelry like chunky " +
                "bracelets or necklaces can be included in this collage.", Category.NIGHT_OUT);

        Collage collageNO8 = new Collage("Classic Elegance",
                "Timeless pieces like little black dresses, pumps, simple clutch bags, and " +
                        "delicate jewelry like pearl earrings or simple bracelets can be included " +
                        "in this collage.", Category.NIGHT_OUT);

        Collage collageNO9 = new Collage("Sophisticated Sparkle",
                "Chic and refined pieces like midi dresses, strappy heels, metallic clutch bags, " +
                        "and statement jewelry like crystal drop earrings or layered necklaces " +
                        "can be included in this collage.", Category.NIGHT_OUT);

        Collage collageNO10 = new Collage("After Dark",
                "Sultry and alluring pieces like bodycon dresses, strappy sandals, bold " +
                        "accessories like statement necklaces or cuff bracelets can be included " +
                        "in this collage.", Category.NIGHT_OUT);



//        WEDDING collages
        Collage collageW1 = new Collage("Romantic Lace",
                "Soft and delicate pieces like lace dresses, strappy heels, pearl earrings, " +
                        "and simple clutch bags can be included in this collage.", Category.WEDDING);

        Collage collageW2 = new Collage("Garden Wedding",
                "Light and airy pieces like floral dresses, strappy sandals, dainty " +
                        "accessories like floral hair pins or drop earrings can be included " +
                        "in this collage.", Category.WEDDING);

        Collage collageW3 = new Collage("Black Tie Glam",
                "Formal and elegant pieces like floor-length gowns, statement heels, " +
                        "beaded clutch bags, and statement jewelry like chandelier earrings " +
                        "or layered necklaces can be included in this collage.", Category.WEDDING);

        Collage collageW4 = new Collage("Beach Chic",
                "Flowy and breezy pieces like maxi dresses, strappy sandals, sun hats, " +
                        "and shell jewelry like bracelets or necklaces can be included in " +
                        "this collage.", Category.WEDDING);

        Collage collageW5 = new Collage("Rustic Charm",
                "Country-inspired pieces like lace dresses, cowboy boots, leather bags, " +
                        "and turquoise jewelry like necklaces or earrings can be included in " +
                        "this collage.", Category.WEDDING);

        Collage collageW6 = new Collage("Boho Bliss",
                "Whimsical pieces like crochet dresses, suede ankle boots, flower crowns, " +
                        "and layered jewelry like beaded necklaces or stacked bracelets can " +
                        "be included in this collage.", Category.WEDDING);

        Collage collageW7 = new Collage("Vintage Elegance",
                "Retro-inspired pieces like A-line dresses, kitten heels, vintage clutch bags, " +
                        "and statement jewelry like cocktail rings or brooches can be included " +
                        "in this collage.", Category.WEDDING);

        Collage collageW8 = new Collage("Modern Minimalism",
                "Clean and sophisticated pieces like slip dresses, mules, simple clutch bags, " +
                        "and delicate jewelry like stud earrings or thin bracelets can be included " +
                        "in this collage.", Category.WEDDING);

        Collage collageW9 = new Collage("Enchanted Forest",
                "Magical pieces like tulle skirts, ballet flats, flower hair clips, " +
                        "and delicate jewelry like fairy-inspired necklaces or bracelets can " +
                        "be included in this collage.", Category.WEDDING);

        Collage collageW10 = new Collage("Golden Glam",
                "Luxurious pieces like metallic dresses, strappy heels, gold clutch bags, " +
                        "and statement jewelry like crystal drop earrings or layered necklaces " +
                        "can be included in this collage.", Category.WEDDING);


//        CASUAL collages
        Collage collageC1 = new Collage("Denim Dream",
                "Easy and comfortable pieces like denim jackets, skinny jeans, " +
                        "white sneakers, and simple jewelry like hoop earrings or " +
                        "thin bracelets can be included in this collage.", Category.CASUAL);

        Collage collageC2 = new Collage("Athleisure",
                "Sporty and comfortable pieces like leggings, oversized hoodies, " +
                        "sneakers, and statement accessories like baseball caps or " +
                        "sunglasses can be included in this collage.", Category.CASUAL);

        Collage collageC3 = new Collage("Cozy Knits",
                "Warm and comfortable pieces like oversized sweaters, wool scarves, " +
                        "booties, and simple jewelry like stud earrings or thin necklaces " +
                        "can be included in this collage.", Category.CASUAL);

        Collage collageC4 = new Collage("Weekend Vibes",
                "Relaxed and easy pieces like t-shirts, shorts, slip-on sneakers, " +
                        "and simple accessories like baseball caps or crossbody bags " +
                        "can be included in this collage.", Category.CASUAL);

        Collage collageC5 = new Collage("Effortless Chic",
                "Simple and stylish pieces like midi dresses, ankle boots, leather " +
                        "jackets, and delicate jewelry like simple rings or dainty " +
                        "necklaces can be included in this collage.", Category.CASUAL);

        Collage collageC6 = new Collage("Bohemian Beauty",
                "Free-spirited pieces like flowy maxi dresses, fringe bags, " +
                        "sandals, and bold jewelry like oversized earrings or " +
                        "chunky bracelets can be included in this collage.", Category.CASUAL);

        Collage collageC7 = new Collage("Preppy Perfection",
                "Classic pieces like collared shirts, chinos, loafers, and simple " +
                        "accessories like watches or belts can be included in this collage.", Category.CASUAL);

        Collage collageC8 = new Collage("Tomboy Chic",
                "Androgynous pieces like oversized blazers, ripped jeans, " +
                        "loafers or oxfords, and simple jewelry like stud earrings or " +
                        "thin necklaces can be included in this collage.", Category.CASUAL);

        Collage collageC9 = new Collage("Vintage Vibes",
                "Retro-inspired pieces like high-waisted jeans, graphic tees, " +
                        "platform sandals, and statement accessories like wide brim " +
                        "hats or cat-eye sunglasses can be included in this collage.", Category.CASUAL);

        Collage collageC10 = new Collage("Eclectic Mix",
                "Unconventional pieces like patterned jumpsuits, combat boots, " +
                        "statement jackets, and bold jewelry like cuff bracelets or " +
                        "multi-layered necklaces can be included in this collage.", Category.CASUAL);


//        FORMAL collages
        Collage collageF1 = new Collage("Black Tie Glam",
                "Elegant and sophisticated pieces like floor-length gowns, " +
                        "tuxedos, high heels, and statement jewelry like chandelier " +
                        "earrings or diamond necklaces can be included in this collage.", Category.FORMAL);

        Collage collageF2 = new Collage("Cocktail Hour",
                "Semi-formal pieces like knee-length dresses, dressy blouses, " +
                        "high heels, and classic jewelry like pearl earrings or " +
                        "simple bracelets can be included in this collage.", Category.FORMAL);

        Collage collageF3 = new Collage("Red Carpet Ready",
                "Dramatic and eye-catching pieces like sequin gowns, high slit " +
                        "dresses, strappy heels, and statement jewelry like " +
                        "sparkling chokers or stacked bangles can be included in " +
                        "this collage.", Category.FORMAL);

        Collage collageF4 = new Collage("Chic and Sleek",
                "Modern and minimalist pieces like tailored suits, sleek " +
                        "dresses, pumps, and delicate jewelry like small hoop " +
                        "earrings or simple necklaces can be included in this collage.", Category.FORMAL);

        Collage collageF5 = new Collage("Garden Party",
                "Light and airy pieces like flowy maxi dresses, strappy sandals, " +
                        "clutch bags, and delicate jewelry like drop earrings or " +
                        "thin bracelets can be included in this collage.", Category.FORMAL);

        Collage collageF6 = new Collage("Afternoon Tea",
                "Ladylike and refined pieces like lace dresses, kitten heels, " +
                        "pearl necklaces, and elegant accessories like silk scarves " +
                        "or clutch bags can be included in this collage.", Category.FORMAL);

        Collage collageF7 = new Collage("Art Gallery Opening",
                "Creative and edgy pieces like asymmetrical dresses, chunky " +
                        "heels, geometric jewelry, and bold accessories like " +
                        "clutch purses or statement hats can be included in this collage.", Category.FORMAL);

        Collage collageF8 = new Collage("Gala Glam",
                "Opulent and luxurious pieces like beaded gowns, metallic " +
                        "heels, statement earrings, and sparkling bracelets can " +
                        "be included in this collage.", Category.FORMAL);

        Collage collageF9 = new Collage("Winter Wonderland",
                "Festive and cozy pieces like velvet dresses, fur coats, " +
                        "embellished heels, and sparkling jewelry like snowflake " +
                        "earrings or crystal necklaces can be included in this collage.", Category.FORMAL);

        Collage collageF10 = new Collage("Royal Affair",
                "Regal and elegant pieces like ball gowns, tiaras, " +
                        "chandelier earrings, and glamorous accessories like " +
                        "satin gloves or beaded clutches can be included in this collage.", Category.FORMAL);

        collageRepository.saveAll(Arrays.asList(collageNO1, collageNO2, collageNO3, collageNO4, collageNO5, collageNO6,
                collageNO7, collageNO8, collageNO9, collageNO10, collageW1, collageW2, collageW3, collageW4, collageW5,
                collageW6, collageW7, collageW8, collageW9, collageW10, collageC1, collageC2, collageC3, collageC4,
                collageC5, collageC6, collageC7, collageC8, collageC9, collageC10, collageF1, collageF2, collageF3,
                collageF4, collageF5, collageF6, collageF7, collageF8, collageF9, collageF10));



//        Users
        User user1 = new User("aya hezam", "aya@bnta.com");
        userRepository.save(user1);

        User user2 = new User("diana eboh", "diana@bnta.com");
        userRepository.save(user2);

        User user3 = new User("samra afzaal", "samra@bnta.com");
        userRepository.save(user3);

        User user4 = new User("chinika charles", "chinika@bnta.com");
        userRepository.save(user4);
    }

}
