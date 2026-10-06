/**
 * Material Registry for Eltz processing.
 */

GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("hexafluorosilicic_acid")
        .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
        .color(0xd00010)
        .components("2x hydrogen", "1x silicon", "6x fluorine")

    event.create("aluminosilicate_residue")
        .dust()
        .color(0xd1cac0).iconSet("rough")

    // Processing line
    event.create("dirty_hexafluorosilicic_solution")
        .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
        .color(0xe00030)
        .components("hexafluorosilicic_acid", "2x water", "aluminosilicate_residue")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("dusty_helium")
        .gas()
        .color(0xa040af)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components(GTMaterials.Helium, "aluminosilicate_residue")

    event.create("eltz-enriched_helium")
        .gas()
        .color(0x10c050)
        .components("1x helium", "1x monilabs:eltz", "aluminosilicate_residue")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("eltz-depleted_helium")
        .gas()
        .color(0x006010)
        .components("3x helium", "1x metal_mixture")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("eltic_sludge")
        .dust()
        .color(0x857049)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("impure_eltic")
        .gem()
        .color(0xbb9966).secondaryColor(0x881105)
        .iconSet("dilithium")
        .components("monilabs:eltz", GTMaterials.SiliconDioxide, GTMaterials.Sapphire)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.NO_SMASHING)

    // Byproducts
    event.create("lithium_oxide")
        .dust()
        .color(0xdfdfdf)
        .components("2x lithium", "1x oxygen")

    event.create("manganese_oxide")
        .dust()
        .color(0x425142)
        .components("1x manganese", "1x oxygen")

    event.create("ferrous_oxide")
        .dust()
        .color(0x231e1e)
        .components("1x iron", "1x oxygen")

    // Also used in Snowchestiteline (HM only)
    event.create("caesium_hydroxide")
        .dust()
        .color(0xbd8340).iconSet("dull")
        .components("caesium", "oxygen", "hydrogen")
        .ignoredTagPrefixes([TagPrefix.dustTiny, TagPrefix.dustSmall])

    // Also used in the Magnetron
    event.create("beryllium_oxide")
        .ingot()
        .color(0x54C757).iconSet("dull")
        .flags(GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_RING)
        .components("beryllium", "oxygen")
})
