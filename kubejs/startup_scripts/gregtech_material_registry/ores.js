/**
 * Material Registry for ores.
 */

GTCEuStartupEvents.registry("gtceu:material", event => {

    // Snowchestite is part of harder Naquadah Processing
    if (doHarderProcessing) {
        event.create("snowchestite")
            .dust().ore()
            .color(0x274c9f).iconSet("shiny")
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
            .components("3x naquadah_oxide", "pyromorphite")
    }

    // Earth
    event.create("azurite")
        .dust().ore(2, 3)
        .iconSet(GTMaterialIconSet.SHINY)
        .color(0x162eba).secondaryColor(0x053f2b)
        .components("3x copper", "2x carbon", "8x oxygen", "2x hydrogen")
        .formula("Cu3(CO3)2(OH)2")
        .addOreByproducts(GTMaterials.Calcite, GTMaterials.CalciumHydroxide, GTMaterials.Barite, GTMaterials.Malachite)
        .washedIn(GTMaterials.NitricAcid)
        .oreSmeltInto(GTMaterials.Copper)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    // End
    event.create("purpurite")
        .dust().ore(2, 2)
        .iconSet("rough")
        .color(0xb18bc6).secondaryColor(0x561944)
        .components(GTMaterials.Manganese, "5x phosphate")
        .formula("MnPO4")
        .addOreByproducts(GTMaterials.Iron, GTMaterials.Phosphate)
        .washedIn(GTMaterials.NitricAcid)

    // Moon
    event.create("dilithium")
        .gem().ore(2, 1)
        .iconSet("dilithium")
        .color(0xfdd2df).secondaryColor(0xfa52b5)
        .element(GTElements.get("dilithium"))
        .addOreByproducts(GTMaterials.Lithium, GTMaterials.Cobalt, GTMaterials.Platinum)

    event.create("fluorite")
        .gem().ore()
        .iconSet(GTMaterialIconSet.DIAMOND)
        .color(0x0c9949)
        .components("1x calcium", "2x fluorine")
        .addOreByproducts(GTMaterials.Calcite, GTMaterials.Barite)

    event.create("anorthite")
        .gem().ore(2, 2)
        .iconSet(GTMaterialIconSet.GEM_VERTICAL)
        .color(0xddd4af).secondaryColor(0x575d60)
        .components("1x calcium", "2x aluminium", "2x silicon", "8x oxygen")
        .addOreByproducts(GTMaterials.Sodium, GTMaterials.Sodium, GTMaterials.Aluminium)
        .washedIn(GTMaterials.NitricAcid)

    // Mars
    event.create("wolframite")
        .dust().ore(2, 2)
        .color(0xa0734e).secondaryColor(0x405275)
        .components("1x iron", "1x manganese", "2x tungsten", "8x oxygen")
        .formula("(Fe,Mn)(WO3)O")
        .washedIn(GTMaterials.NitricAcid)
        .separatedInto(GTMaterials.Iron)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("bismite")
        .dust().ore(2, 2)
        .color(0xd3e298).secondaryColor(0x43dbad)
        .components("2x bismuth", "3x oxygen")
        .addOreByproducts(GTMaterials.Tin, GTMaterials.Bismuth)
        .washedIn(GTMaterials.NitricAcid)

    event.create("arsenopyrite")
        .dust().ore(2, 2)
        .iconSet(GTMaterialIconSet.ROUGH)
        .color(0xced89c).secondaryColor(0x375944)
        .components("1x iron", "1x arsenic", "1x sulfur")
        .addOreByproducts(GTMaterials.Sulfur, GTMaterials.Cobalt, GTMaterials.Sulfur)
        .washedIn(GTMaterials.NitricAcid)

    event.create("carnotite")
        .dust().ore(2, 2)
        .iconSet(GTMaterialIconSet.METALLIC)
        .color(0xe8de29).secondaryColor(0xb58c34)
        .components("2x potassium", "6x uraninite", "2x vanadium", "8x oxygen", "9x water")
        .formula("K2(UO2)2(VO4)2(H2O)3")
        .addOreByproducts(GTMaterials.Uraninite, GTMaterials.Potassium, GTMaterials.Vanadium)
        .washedIn(GTMaterials.NitricAcid)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("gallite")
        .dust().ore(1, 2)
        .color(0xedb376).secondaryColor(0x5b5563)
        .components("1x copper", "1x gallium", "2x sulfur")
        .washedIn(GTMaterials.NitricAcid)

    event.create("briartite")
        .dust().ore()
        .color(0xc4bf60).secondaryColor(0xa5a598)
        .components("3x chalcocite", "2x sphalerite", "3x germanium_disulfide")
        .washedIn(GTMaterials.Mercury)
        .flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)

    // Venus
    event.create("cuprorhodsite")
        .dust().ore()
        .iconSet(GTMaterialIconSet.BRIGHT)
        .color(0xc1aa82)
        .components("1x copper", "1x iron", "4x rhodium", "8x sulfur")
        .addOreByproducts(GTMaterials.Chalcocite, GTMaterials.Platinum, GTMaterials.Ruthenium)

    event.create("argentite")
        .dust().ore(2, 2)
        .iconSet(GTMaterialIconSet.ROUGH)
        .color(0xc6c6b8).secondaryColor(0x1c1c28)
        .components("2x silver", "1x sulfur")
        .addOreByproducts(GTMaterials.Lead, GTMaterials.Sulfur, GTMaterials.Zinc)
        .washedIn(GTMaterials.NitricAcid)
        .oreSmeltInto(GTMaterials.Silver)

    event.create("titanite")
        .gem().ore(2, 2)
        .iconSet(GTMaterialIconSet.GEM_HORIZONTAL)
        .color(0xa3ba3d).secondaryColor(0x355b30)
        .components("1x calcium", "1x titanium", "1x silicon", "5x oxygen")
        .washedIn(GTMaterials.NitricAcid)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("xenotime")
        .gem().ore(1, 2)
        .color(0xaa802a).secondaryColor(0x211a14)
        .components("1x yttrium", "1x phosphate")
        .addOreByproducts(GTMaterials.Yttrium, GTMaterials.RareEarth, GTMaterials.Samarium)
        .washedIn(GTMaterials.NitricAcid)

    // Mercury
    event.create("laurite")
        .dust().ore()
        .iconSet(GTMaterialIconSet.DIAMOND)
        .color(0x6f2c23)
        .components("ruthenium", "2x sulfur")
        .addOreByproducts("pyrite", "ruthenium", "rhodium")

    event.create("sperrylite")
        .gem().ore(2, 2)
        .color(0xaaa399).secondaryColor(0x37474F)
        .components("1x platinum", "2x arsenic")
        .addOreByproducts(GTMaterials.Platinum, GTMaterials.Nickel, GTMaterials.Palladium)
        .washedIn(GTMaterials.NitricAcid)

    event.create("columbite")
        .dust().ore(2, 2)
        .iconSet(GTMaterialIconSet.METALLIC)
        .color(0x304868).secondaryColor(0x161a1e)
        .components("1x iron", "2x niobium", "6x oxygen")
        .addOreByproducts(GTMaterials.Manganese, GTMaterials.Tantalum, GTMaterials.Niobium)
        .washedIn(GTMaterials.NitricAcid)

    // Glacio
    event.create("iridosmine")
        .dust().ore()
        .iconSet(GTMaterialIconSet.METALLIC)
        .color(0x54afff).secondaryColor(0x1b5651)
        .components("2x osmium", "1x iridium")
        .addOreByproducts("osmium", "iridium", "rhodium")

    event.create("kaemanite")
        .dust().ore()
        .iconSet(GTMaterialIconSet.BRIGHT)
        .color(0xe7413c)
        .components("trinium", "tantalum", "4x oxygen")
        .addOreByproducts("niobium", "trinium_sulfide", "trinium")

    event.create("stolzite")
        .gem().ore(2, 3)
        .color(0xa5591f).secondaryColor(0x564517)
        .components("1x lead", "1x tungsten", "4x oxygen")
        .formula("Pb(WO3)O")
        .addOreByproducts(GTMaterials.Lead, GTMaterials.Manganese, GTMaterials.Molybdenum)
        .washedIn(GTMaterials.NitricAcid)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.CRYSTALLIZABLE, GTMaterialFlags.GENERATE_LENS)

    // MM-Exclusive
    event.create("darmstadtite")
        .dust().ore(2, 1)
        .iconSet(GTMaterialIconSet.DULL)
        .color(0x99AA87)
        .components("2x darmstadtium", "3x sulfur")
        .addOreByproducts(GTMaterials.RhodiumSulfate, GTMaterials.RareEarth, GTMaterials.Darmstadtium)

    event.create("dulysite")
        .gem().ore(2, 1)
        .iconSet(GTMaterialIconSet.DIAMOND)
        .color(0xF5EFC0)
        .components(GTMaterials.Duranium, "3x chlorine")
        .addOreByproducts(GTMaterials.Sphalerite, GTMaterials.Duranium, GTMaterials.Europium)
})

// Byproducts that are materials registered by KubeJS can only be set in modification
GTCEuStartupEvents.materialModification(event => {
    if (doHarderProcessing) {
        GTMaterials.get("snowchestite").getProperty(PropertyKey.ORE)
            .setOreByProducts(GTMaterials.Chalcopyrite, GTMaterials.VanadiumMagnetite, GTMaterials.get("naquadah_hydroxide"))
    }

    GTMaterials.get("wolframite").getProperty(PropertyKey.ORE)
        .setOreByProducts(GTMaterials.Iron, GTMaterials.Manganese, GTMaterials.get("fluorite"))

    GTMaterials.get("gallite").getProperty(PropertyKey.ORE)
        .setOreByProducts(GTMaterials.Chalcopyrite, GTMaterials.Gallium, GTMaterials.Gallium, GTMaterials.get("germanium_disulfide"))

    GTMaterials.get("briartite").getProperty(PropertyKey.ORE)
        .setOreByProducts(GTMaterials.Copper, GTMaterials.Sphalerite, GTMaterials.get("germanium_disulfide"))

    GTMaterials.get("titanite").getProperty(PropertyKey.ORE)
        .setOreByProducts(GTMaterials.Calcium, GTMaterials.Rutile, GTMaterials.get("fluorite"), GTMaterials.RareEarth)
})
