window.SIDEBAR_ITEMS = {"constant":[["PREINTERNED_SYMBOLS_COUNT",""],["SYMBOL_DIGITS_BASE",""]],"mod":[["kw","This module contains all the defined keyword `Symbol`s."],["sym","This module contains all the defined non-keyword `Symbol`s."]],"struct":[["Ident",""],["IdentPrinter","This is the most general way to print identifiers. AST pretty-printer is used as a fallback for turning AST structures into token streams for proc macros. Additionally, proc macros may stringify their input and expect it survive the stringification (especially true for proc macro derives written between Rust 1.15 and 1.30). So we need to somehow pretty-print `$crate` in a way preserving at least some of its hygiene data, most importantly name of the crate it refers to. As a result we print `$crate` as `crate` if it refers to the local crate and as `::other_crate_name` if it refers to some other crate. Note, that this is only done if the ident token is printed from inside of AST pretty-printing, but not otherwise. Pretty-printing is the only way for proc macros to discover token contents, so we should not perform this lossy conversion if the top level call to the pretty-printer was done for a token stream or a single token."],["Interner",""],["InternerInner",""],["MacroRulesNormalizedIdent","An newtype around `Ident` that calls [Ident::normalize_to_macro_rules] on construction."],["Symbol","An interned string."],["SymbolIndex",""]]};