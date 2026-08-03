/**
 * Lowers the tiering of Active Transformers from LuV to IV - script 1 of 2.
 * - Replaces the Superconducting coil in the core of the Active Transformer with High Power casing
 */
let ActiveTransformerMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.electric.ActiveTransformerMachine")
let GTMemoizer = Java.loadClass("com.gregtechceu.gtceu.utils.memoization.GTMemoizer")

// Function<MultiblockMachineDefinition, BlockPattern>
let active_transformer_pattern = (definition) => MultiblockPatternBuilder
                    .start(RelativeDirection.FRONT, RelativeDirection.UP, RelativeDirection.RIGHT)
    .slice("XXX", "XXX", "XXX")
    .slice("XXX", "XCX", "XXX")
    .slice("XXX", "XSX", "XXX")
    .where("S", Predicates.controller(Predicates.blocks(GTMultiMachines.ACTIVE_TRANSFORMER.get())))
    .where("X", Predicates.blocks(GTBlocks.HIGH_POWER_CASING.get()).setMinGlobalLimited(12)
        .or(ActiveTransformerMachine.getHatchPredicates()))
    .where("C", Predicates.blocks(GTBlocks.HIGH_POWER_CASING.get())
        .or(Predicates.blocks(GTBlocks.SUPERCONDUCTING_COIL.get())))
    .build()

// Set the pattern for Active Transformer
StartupEvents.postInit(event => {
    GTMultiMachines.ACTIVE_TRANSFORMER.setPattern("main", active_transformer_pattern)
})
