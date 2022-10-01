window.SIDEBAR_ITEMS = {"enum":[["AngleBracketedArg","Either an argument for a parameter e.g., `'a`, `Vec<u8>`, `0`, or a constraint on an associated item, e.g., `Item = String` or `Item: Bound`."],["AssocConstraintKind","The kinds of an `AssocConstraint`."],["AssocItemKind","Represents associated item kinds."],["Async",""],["AttrKind",""],["AttrStyle","Distinguishes between `Attribute`s that decorate items and Attributes that are contained as statements within items. These two cases need to be distinguished for pretty-printing."],["BinOpKind",""],["BlockCheckMode",""],["BorrowKind","The kind of borrow in an `AddrOf` expression, e.g., `&place` or `&raw const place`."],["ByRef",""],["CaptureBy","A capture clause used in closures and `async` blocks."],["ClosureBinder","Closure lifetime binder, `for<'a, 'b>` in `for<'a, 'b> |_: &'a (), _: &'b ()|`."],["Const",""],["Defaultness","Item defaultness. For details see the RFC #2532."],["ExprKind",""],["Extern","`extern` qualifier on a function item or function type."],["FloatTy",""],["FnRetTy",""],["ForeignItemKind","An item in `extern` block."],["GenericArg","Concrete argument in the sequence of generic args."],["GenericArgs","The arguments of a path segment."],["GenericBound","The AST represents all type param bounds as types. `typeck::collect::compute_bounds` matches these against the “special” built-in traits (see `middle::lang_items`) and detects `Copy`, `Send` and `Sync`."],["GenericParamKind",""],["ImplPolarity",""],["Inline",""],["InlineAsmOperand","Inline assembly operand."],["InlineAsmRegOrRegClass","Inline assembly operand explicit register or register class."],["InlineAsmTemplatePiece",""],["IntTy",""],["IsAuto","Is the trait definition an auto trait?"],["ItemKind",""],["LitFloatType","Type of the float literal based on provided suffix."],["LitIntType","Type of the integer literal based on provided suffix."],["LitKind","Literal kind."],["LocalKind",""],["MacArgs","Arguments passed to an attribute or a function-like macro."],["MacArgsEq",""],["MacDelimiter",""],["MacStmtStyle",""],["MetaItemKind","A compile-time attribute item."],["ModKind","Module item kind."],["Movability","The movability of a generator / closure literal: whether a generator contains self-references, causing it to be `!Unpin`."],["Mutability",""],["NestedMetaItem","Possible values inside of compile-time attribute lists."],["ParamKindOrd","Specifies the enforced ordering for generic parameters. In the future, if we wanted to relax this order, we could override `PartialEq` and `PartialOrd`, to allow the kinds to be unordered."],["PatKind","All the different flavors of pattern that Rust recognizes."],["RangeEnd",""],["RangeLimits","Limit types of a range (inclusive or exclusive)"],["RangeSyntax",""],["SelfKind","Alternative representation for `Arg`s describing `self` parameter of methods."],["StmtKind",""],["StrStyle",""],["StructRest",""],["Term","The kinds of an `AssocConstraint`."],["TraitBoundModifier","A modifier on a bound, e.g., `?Trait` or `~const Trait`."],["TraitObjectSyntax","Syntax used to declare a trait object."],["TyKind","The various kinds of type recognized by the compiler."],["UintTy",""],["UnOp","Unary operator."],["Unsafe",""],["UnsafeSource",""],["UseTreeKind","Part of `use` item to the right of its prefix."],["VariantData","Fields and constructor ids of enum variants and structs."],["VisibilityKind",""],["WherePredicate","A single predicate in a where-clause."]],"mod":[["size_asserts",""]],"struct":[["AngleBracketedArgs","A path like `Foo<'a, T>`."],["AnonConst","A constant (expression) that’s not an item or associated item, but needs its own `DefId` for type-checking, const-eval, etc. These are usually found nested inside types (e.g., array lengths) or expressions (e.g., repeat counts), and also used to define explicit discriminant values for enum variants."],["Arm","An arm of a ‘match’."],["AssocConstraint","A constraint on an associated type (e.g., `A = Bar` in `Foo<A = Bar>` or `A: TraitA + TraitB` in `Foo<A: TraitA + TraitB>`)."],["AttrId",""],["AttrItem",""],["Attribute","Metadata associated with an item."],["BareFnTy",""],["BindingAnnotation","Explicit binding annotations given in the HIR for a binding. Note that this is not the final binding mode that we infer after type inference."],["Block","A block (`{ .. }`)."],["Crate",""],["EnumDef",""],["Expr","An expression."],["ExprField","A single field in a struct expression, e.g. `x: value` and `y` in `Foo { x: value, y }`."],["FieldDef","Field definition in a struct, variant or union."],["Fn",""],["FnDecl","A signature (not the body) of a function declaration."],["FnHeader","A function header."],["FnSig","Represents a function’s signature in a trait declaration, trait implementation, or free function."],["ForeignMod","Foreign module declaration."],["GenericParam",""],["Generics","Represents lifetime, type and const parameters attached to a declaration of a function, enum, trait, etc."],["Impl",""],["InlineAsm","Inline assembly."],["InlineAsmOptions",""],["InlineAsmSym","Inline assembly symbol operands get their own AST node that is somewhat similar to `AnonConst`."],["Item","An item definition."],["Label","A “Label” is an identifier of some point in sources, e.g. in the following code:"],["Lifetime","A “Lifetime” is an annotation of the scope in which variable can be used, e.g. `'a` in `&'a i32`."],["Lit","An AST literal."],["Local","Local represents a `let` statement, e.g., `let <pat>:<ty> = <expr>;`."],["MacCall","Represents a macro invocation. The `path` indicates which macro is being invoked, and the `args` are arguments passed to it."],["MacCallStmt",""],["MacroDef","Represents a macro definition."],["MetaItem","A spanned compile-time attribute item."],["ModSpans",""],["MutTy",""],["NormalAttr",""],["Param","A parameter in a function header."],["ParenthesizedArgs","A path like `Foo(A, B) -> C`."],["Pat","A match pattern."],["PatField","A single field in a struct pattern."],["Path","A “Path” is essentially Rust’s notion of a name."],["PathSegment","A segment of a path: an identifier, an optional lifetime, and a set of types."],["PolyTraitRef",""],["QSelf","The explicit `Self` type in a “qualified path”. The actual path, including the trait and the associated item, is stored separately. `position` represents the index of the associated item qualified with this `Self` type."],["Stmt","A statement"],["StrLit","Same as `Lit`, but restricted to string literals."],["StructExpr",""],["Trait",""],["TraitRef","`TraitRef`s appear in impls."],["Ty",""],["TyAlias",""],["TyAliasWhereClause","The location of a where clause on a `TyAlias` (`Span`) and whether there was a `where` keyword (`bool`). This is split out from `WhereClause`, since there are two locations for where clause on type aliases, but their predicates are concatenated together."],["UseTree","A tree of paths sharing common prefixes. Used in `use` items both at top-level and inside of braces in import groups."],["Variant","Enum variant."],["Visibility",""],["WhereBoundPredicate","A type bound."],["WhereClause","A where-clause in a definition."],["WhereEqPredicate","An equality predicate (unsupported)."],["WhereRegionPredicate","A lifetime predicate."]],"type":[["AssocItem","Represents associated items. These include items in `impl` and `trait` definitions."],["AttrVec","A list of attributes."],["BinOp",""],["ExplicitSelf",""],["ForeignItem",""],["GenericBounds",""]]};