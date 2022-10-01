window.SIDEBAR_ITEMS = {"fn":[["make_local_map","Construct the mapping while swapping out unused stuff out from the `vec`."],["remove_dead_blocks",""],["remove_unused_definitions","Removes unused definitions. Updates the used locals to reflect the changes made."],["save_unreachable_coverage","Some MIR transforms can determine at compile time that a sequences of statements will never be executed, so they can be dropped from the MIR. For example, an `if` or `else` block that is guaranteed to never be executed because its condition can be evaluated at compile time, such as by const evaluation: `if false { ... }`."],["simplify_cfg",""],["simplify_locals",""]],"struct":[["CfgSimplifier",""],["LocalUpdater",""],["SimplifyCfg",""],["SimplifyLocals",""],["UsedLocals","Keeps track of used & unused locals."]]};