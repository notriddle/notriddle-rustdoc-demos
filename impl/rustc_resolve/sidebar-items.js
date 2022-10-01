window.SIDEBAR_ITEMS = {"enum":[["AmbiguityErrorMisc","Miscellaneous bits of metadata for better ambiguity error reporting."],["AmbiguityKind",""],["BuiltinMacroState","Used for better errors for E0773"],["Determinacy",""],["ImplTraitContext",""],["LexicalScopeBinding","An intermediate resolution result."],["ModuleKind",""],["ModuleOrUniformRoot",""],["NameBindingKind",""],["Namespace","Different kinds of symbols can coexist even if they share the same textual name. Therefore, they each have a separate universe (known as a “namespace”)."],["PathResult",""],["ResolutionError",""],["Scope","A specific scope in which a name can be looked up. This enum is currently used only for early resolution (imports and macros), but not for late resolution yet."],["ScopeSet","Names from different contexts may want to visit different subsets of all specific scopes with different restrictions when looking up the resolution. This enum is currently used only for early resolution (imports and macros), but not for late resolution yet."],["VisResolutionError",""],["Weak",""]],"fn":[["module_to_string","A somewhat inefficient routine to obtain the name of a module."],["names_to_string",""],["path_names_to_string",""],["provide",""]],"mod":[["access_levels",""],["build_reduced_graph","After we obtain a fresh AST fragment from a macro, code in this module helps to integrate that fragment into the module structures that are already partially built."],["check_unused",""],["def_collector",""],["diagnostics",""],["ident",""],["imports","A bunch of methods and structures more or less related to resolving imports."],["late","“Late resolution” is the pass that resolves most of names in a crate beside imports and macros. It runs when the crate is fully expanded and its module structure is fully built. So it just walks through the crate and resolves all the expressions, types, etc."],["macros","A bunch of methods and structures more or less related to resolving macros and interface provided by `Resolver` to macro expander."]],"struct":[["AmbiguityError",""],["BindingError",""],["BindingKey","A key that identifies a binding in a given `Module`."],["DeriveData",""],["ExternPreludeEntry",""],["Finalize",""],["MacroData",""],["ModuleData","One node in the tree of modules."],["NameBinding","Records a possibly-private value, type, or module definition."],["ParentScope","Everything you need to know about a name’s location to resolve it. Serves as a starting point for the scope visitor. This struct is currently used only for early resolution (imports and macros), but not for late resolution yet."],["PerNS","Just a helper ‒ separate structure for each namespace."],["PrivacyError",""],["Resolver","The main resolver class."],["ResolverArenas","Nothing really interesting here; it just provides memory for the rest of the crate."],["Segment","A minimal representation of a path segment. We use this in resolve because we synthesize ‘path segments’ which don’t have the rest of an AST or HIR `PathSegment`."],["UseError",""]],"trait":[["ToNameBinding",""]],"type":[["Module",""],["Res",""],["Resolutions",""]]};