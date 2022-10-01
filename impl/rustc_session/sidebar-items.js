window.SIDEBAR_ITEMS = {"enum":[["CtfeBacktrace","The behavior of the CTFE engine when an error occurs with regards to backtraces."],["DataTypeKind",""],["DiagnosticOutput",""],["IncrCompSession","Holds data on the current incremental compilation session, if there is one."],["SizeKind",""]],"fn":[["build_session",""],["early_error",""],["early_error_no_abort",""],["early_warn",""]],"macro":[["declare_lint","Declares a static item of type `&'static Lint`."],["declare_lint_pass","Declares a type named `$name` which implements `LintPass`. To the right of `=>` a comma separated list of `Lint` statics is given."],["declare_tool_lint",""],["impl_lint_pass","Implements `LintPass for $ty` with the given list of `Lint` statics."]],"mod":[["cgu_reuse_tracker","Some facilities for tracking how codegen-units are reused during incremental compilation. This is used for incremental compilation tests and debug output."],["code_stats",""],["config","Contains infrastructure for configuring the compiler, including parsing command-line options."],["cstore","the rustc crate store interface. This also includes types that are mostly used as a part of that interface, but these should probably get a better home if someone can find one."],["errors",""],["filesearch","A module for searching for libraries"],["options",""],["output","Related to out filenames of compilation (e.g. save analysis, binaries)."],["parse","Contains `ParseSess` which holds state living beyond what one `Parser` might. It also serves as an input to the parser itself."],["search_paths",""],["session",""],["utils",""]],"struct":[["Attribute","Metadata associated with an item."],["FieldInfo",""],["Limit","New-type wrapper around `usize` for representing limits. Ensures that comparisons against limits are consistent throughout the compiler."],["Limits",""],["MarkedAttrs",""],["OptimizationFuel",""],["PerfStats",""],["Session","Represents the data associated with a compilation session for a single crate."],["StableCrateId","A [`StableCrateId`] is a 64-bit hash of a crate name, together with all `-Cmetadata` arguments, and some other data. It is to [`CrateNum`] what [`DefPathHash`] is to [`DefId`]. It is stable across compilation sessions."],["VariantInfo",""]],"trait":[["HashStableContext","Requirements for a `StableHashingContext` to be used in this crate. This is a hack to allow using the `HashStable_Generic` derive macro instead of implementing everything in `rustc_middle`."]]};