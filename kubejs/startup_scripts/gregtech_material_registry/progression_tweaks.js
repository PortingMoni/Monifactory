/**
 * Material Registry for content that directly modifies base GregTech Modern progression, such as advanced solders.
 */

GTCEuStartupEvents.registry("gtceu:material", event => {

    // Neptunium Palladium Aluminium
    event.create("neptunium_palladium_aluminium")
        .fluid().ingot()
        .color(0x69595A)
        .flags(GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)
        .components(GTMaterials.Neptunium.asStack(1), GTMaterials.Palladium.asStack(5), GTMaterials.Aluminium.asStack(2))
        .blastTemp(3600, "mid", GTValues.VA[GTValues.HV], 61.5 * 20)
        .cableProperties(GTValues.V[GTValues.LuV], 8, 8, false);

    // Lanthanum Gold Cadmium Curium Sulfate
    event.create("lanthanum_gold_cadmium_curium_sulfate")
        .fluid().ingot()
        .color(0x961e30)
        .flags(GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_SPRING, GTMaterialFlags.GENERATE_SPRING_SMALL, GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)
        .components(GTMaterials.Lanthanum.asStack(2), GTMaterials.Gold.asStack(3), GTMaterials.Cadmium.asStack(3), GTMaterials.Curium.asStack(1), GTMaterials.Sulfur.asStack(1), GTMaterials.Oxygen.asStack(4))
        .blastTemp(7400, "higher", GTValues.VA[GTValues.LuV], 65 * 20)
        .cableProperties(GTValues.V[GTValues.UHV], 8, 8, false);

    // Advanced Solders
    // TODO: mixer, ABS | processing lines
    event.create("gtceu:advanced_soldering_alloy")
        .ingot()
        .fluid()
        .color(0x74b59b)
        .iconSet("dull")
        .components("5x bismuth", "4x tin", "3x zinc", "1x germanium")

    event.create("living_solder_base")
        .dust()
        .liquid(2896)
        .color(0xafb4c7).secondaryColor(0x675f5a)
        .flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
        .components(GTMaterials.RoseGold.asStack(5), GTMaterials.TinAlloy.asStack(12), GTMaterials.Gallium.asStack(11), GTMaterials.Molybdenum.asStack(7))

    event.create("living_soldering_alloy")
        .ingot()
        .liquid(310)
        .color(0xFF0000b)
        .iconSet("dull")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components(GTMaterials.get("living_solder_base").asStack(7), GTMaterials.Meat.asStack(3))

    event.create("silicon_germanium")
        .dust()
        .color(0x6B7873)
        .components(GTMaterials.Silicon.asStack(4), GTMaterials.Germanium.asStack(1))
})
