/**
 * Re-tiers the WEBHubMachine to late LuV - script 1 of 2.
 * - Replaces the neutronium frames with europium frames.
 */

let WEBHubMachine = Java.loadClass("net.neganote.gtutilities.common.machine.multiblock.WEBHubMachine")
let GTMemoizer = Java.loadClass("com.gregtechceu.gtceu.utils.memoization.GTMemoizer")
StartupEvents.postInit(event => {
    let UtilMachines = Java.loadClass("net.neganote.gtutilities.common.machine.UtilMachines");
    let pterb_pattern = (definition) => MultiblockPatternBuilder
            .start(RelativeDirection.FRONT, RelativeDirection.UP, RelativeDirection.RIGHT)
            .slice("###XXX###", "####F####", "#########", "####H####", "####H####", "####H####", "####H####", "####H####")
            .slice("#XXXXXXX#", "###FHF###", "####H####", "####H####", "####H####", "####F####", "#########", "#########")
            .slice("#XXHHHXX#", "#########", "#########", "#########", "####F####", "####F####", "#########", "#########")
            .slice("XXHHHHHXX", "#F#####F#", "#########", "####S####", "###SSS###", "###SSS###", "###S#S###", "#########")
            .slice("XXHHHHHXX", "FH##H##HF", "#H##C##H#", "HH#SSS#HH", "HHFSSSFHH", "HFFSSSFFH", "H#######H", "H#######H")
            .slice("XXHHHHHXX", "#F#####F#", "#########", "####S####", "###SSS###", "###SSS###", "###S#S###", "#########")
            .slice("#XXHHHXX#", "#########", "#########", "#########", "####F####", "####F####", "#########", "#########")
            .slice("#XXXXXXX#", "###FHF###", "####H####", "####H####", "####H####", "####F####", "#########", "#########")
            .slice("###XXX###", "####F####", "#########", "####H####", "####H####", "####H####", "####H####", "####H####")
            .where('#', Predicates.any())
            .where('X',
                    Predicates.blocks(CASING_PALLADIUM_SUBSTATION.get()).setMinGlobalLimited(30)
                            .or(WEBHubMachine.getHatchPredicates()))
            .where('S', Predicates.blocks(SUPERCONDUCTING_COIL.get()))
            .where('H', Predicates.blocks(HIGH_POWER_CASING.get()))
            .where('C', Predicates.controller(Predicates.blocks(definition.getBlock())))
            .where('F', Predicates.frames(GTMaterials.Neutronium))
            .build();
    UtilMachines.WEB_HUB.setPatternFactory(GTMemoizer["memoize(java.util.function.Supplier)"](() => pterb_pattern.apply(UtilMachines.WEB_HUB)));
})
