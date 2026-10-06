/**
 * Material Registry for content that directly modifies base GregTech Modern progression, such as advanced solders.
 */

GTCEuStartupEvents.registry("gtceu:material", event => {

    // Neptunium Palladium Aluminium
    event.create("neptunium_palladium_aluminium")
        .fluid().ingot()
        .color(0x69595A)
        .flags(GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)
        .components("1x neptunium", "5x palladium", "2x aluminium")
        .blastTemp(3600, "mid", GTValues.VA[GTValues.HV], 61.5 * 20)
        .cableProperties(GTValues.V[GTValues.LuV], 8, 8, false);

    // Lanthanum Gold Cadmium Curium Sulfate
    event.create("lanthanum_gold_cadmium_curium_sulfate")
        .fluid().ingot()
        .color(0x961e30)
        .flags(GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_SPRING, GTMaterialFlags.GENERATE_SPRING_SMALL, GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)
        .components("2x lanthanum", "3x gold", "3x cadmium", "1x curium", "1x sulfur", "4x oxygen")
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
        .components("5x rose_gold", "12x tin_alloy", "11x gallium", "7x molybdenum")

    event.create("living_soldering_alloy")
        .ingot()
        .liquid(310)
        .color(0xFF0000b)
        .iconSet("dull")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components("7x living_solder_base", "3x meat")

    event.create("silicon_germanium")
        .dust()
        .color(0x6B7873)
        .components("4x silicon", "1x germanium")
})
