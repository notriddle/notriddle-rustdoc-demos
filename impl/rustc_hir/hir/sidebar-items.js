window.SIDEBAR_ITEMS = {"constant":[["FN_OUTPUT_NAME",""]],"enum":[["ArrayLen",""],["AssocItemKind",""],["AsyncGeneratorKind","In the case of a generator created as part of an async construct, which kind of async construct caused it to be created?"],["BinOpKind",""],["BlockCheckMode",""],["BodyOwnerKind",""],["BorrowKind","The kind of borrow in an `AddrOf` expression, e.g., `&place` or `&raw const place`."],["ByRef",""],["CaptureBy","A capture clause used in closures and `async` blocks."],["ClosureBinder","Represents `for<...>` binder before a closure"],["ConstContext","The kind of an item that requires const-checking."],["Constness",""],["Defaultness",""],["ExprKind",""],["FnRetTy",""],["ForeignItemKind","An item within an `extern` block."],["GeneratorKind","The type of source expression that caused this generator to be created."],["GenericArg",""],["GenericBound","The AST represents all type param bounds as types. `typeck::collect::compute_bounds` matches these against the “special” built-in traits (see `middle::lang_items`) and detects `Copy`, `Send` and `Sync`."],["GenericParamKind",""],["Guard",""],["ImplItemKind","Represents various kinds of content within an `impl`."],["ImplPolarity",""],["ImplicitSelfKind","Represents what type of implicit self a function has, if any."],["InlineAsmOperand",""],["IsAsync",""],["IsAuto","Is the trait definition an auto trait?"],["ItemKind",""],["LifetimeName",""],["LifetimeParamKind",""],["LocalSource","Hints at the original code for a let statement."],["LoopIdError",""],["LoopSource","The loop type that yielded an `ExprKind::Loop`."],["MatchSource","Hints at the original code for a `match _ { .. }`."],["MaybeOwner",""],["Movability","The movability of a generator / closure literal: whether a generator contains self-references, causing it to be `!Unpin`."],["Mutability",""],["Node",""],["OpaqueTyOrigin","From whence the opaque type came."],["OwnerNode",""],["ParamName",""],["PatKind",""],["PredicateOrigin",""],["PrimTy","Not represented directly in the AST; referred to by name through a `ty_path`."],["QPath","Represents an optionally `Self`-qualified value/type path or associated extension."],["RangeEnd",""],["StmtKind","The contents of a statement."],["Term",""],["TraitBoundModifier","A modifier on a bound, currently this is only used for `?Sized`, where the modifier is `Maybe`. Negative bounds should also be handled here."],["TraitFn","Represents a trait method’s body (or just argument names)."],["TraitItemKind","Represents a trait method or associated constant or type"],["TyKind","The various kinds of types recognized by the compiler."],["TypeBindingKind",""],["UnOp",""],["UnsafeSource",""],["Unsafety",""],["UseKind",""],["VariantData","Fields and constructor IDs of enum variants and structs."],["WherePredicate","A single predicate in a where-clause."],["YieldSource","The yield kind that caused an `ExprKind::Yield`."]],"fn":[["is_range_literal","Checks if the specified expression is a built-in range literal. (See: `LoweringContext::lower_expr()`)."]],"mod":[["size_asserts",""]],"struct":[["AnonConst","A constant (expression) that’s not an item or associated item, but needs its own `DefId` for type-checking, const-eval, etc. These are usually found nested inside types (e.g., array lengths) or expressions (e.g., repeat counts), and also used to define explicit discriminant values for enum variants."],["Arm","Represents a single arm of a `match` expression, e.g. `<pat> (if <guard>) => <body>`."],["AttributeMap","Attributes owned by a HIR owner."],["BareFnTy",""],["BindingAnnotation","Explicit binding annotations given in the HIR for a binding. Note that this is not the final binding mode that we infer after type inference."],["Block","A block of statements `{ .. }`, which may have a label (in this case the `targeted_by_break` field will be `true`) and may be `unsafe` by means of the `rules` being anything but `DefaultBlock`."],["Body","The body of a function, closure, or constant value. In the case of a function, the body contains not only the function body itself (which is an expression), but also the argument patterns, since those are something that the caller doesn’t really care about."],["BodyId",""],["Closure",""],["ConstArg",""],["Crate","The top-level data structure that stores the entire contents of the crate currently being compiled."],["Destination",""],["DotDotPos",""],["EnumDef",""],["Expr","An expression."],["ExprField",""],["FieldDef",""],["FnDecl","Represents the header (not the body) of a function declaration."],["FnHeader",""],["FnSig","Represents a function’s signature in a trait declaration, trait implementation, or a free function."],["ForeignItem",""],["ForeignItemId",""],["ForeignItemRef","A reference from a foreign block to one of its items. This contains the item’s ID, naturally, but also the item’s name and some other high-level details (like whether it is an associated type or method, and whether it is public). This allows other passes to find the impl they want without loading the ID (which means fewer edges in the incremental compilation graph)."],["GenericArgs",""],["GenericParam",""],["GenericParamCount",""],["Generics","Represents lifetimes and type parameters attached to a declaration of a function, enum, trait, etc."],["Impl",""],["ImplItem","Represents anything within an `impl` block."],["ImplItemId",""],["ImplItemRef","A reference from an impl to one of its associated items. This contains the item’s ID, naturally, but also the item’s name and some other high-level details (like whether it is an associated type or method, and whether it is public). This allows other passes to find the impl they want without loading the ID (which means fewer edges in the incremental compilation graph)."],["InferArg",""],["InlineAsm",""],["Item","An item"],["ItemId",""],["Let","Represents a `let <pat>[: <ty>] = <expr>` expression (not a Local), occurring in an `if-let` or `let-else`, evaluating to a boolean. Typically the pattern is refutable."],["Lifetime",""],["Local","Represents a `let` statement (i.e., `let <pat>:<ty> = <init>;`)."],["Mod",""],["ModSpans",""],["MutTy",""],["OpaqueTy",""],["OwnerInfo","Full information resulting from lowering an AST node."],["OwnerNodes","Map of all HIR nodes inside the current owner. These nodes are mapped by `ItemLocalId` alongside the index of their parent node. The HIR tree, including bodies, is pre-hashed."],["Param","Represents a parameter in a function header."],["ParentedNode","HIR node coupled with its parent’s id in the same HIR owner."],["Pat",""],["PatField","A single field in a struct pattern."],["Path","A `Path` is essentially Rust’s notion of a name; for instance, `std::cmp::PartialEq`. It’s represented as a sequence of identifiers, along with a bunch of supporting information."],["PathSegment","A segment of a path: an identifier, an optional lifetime, and a set of types."],["PolyTraitRef",""],["Stmt","A statement."],["TraitCandidate",""],["TraitItem","Represents an item declaration within a trait declaration, possibly including a default implementation. A trait item is either required (meaning it doesn’t have an implementation, just a signature) or provided (meaning it has a default implementation)."],["TraitItemId",""],["TraitItemRef","A reference from an trait to one of its associated items. This contains the item’s id, naturally, but also the item’s name and some other high-level details (like whether it is an associated type or method, and whether it is public). This allows other passes to find the impl they want without loading the ID (which means fewer edges in the incremental compilation graph)."],["TraitRef","References to traits in impls."],["Ty",""],["TypeBinding","Bind a type to an associated type (i.e., `A = Foo`)."],["Upvar","A variable captured by a closure."],["Variant",""],["WhereBoundPredicate","A type bound (e.g., `for<'c> Foo: Send + Clone + 'c`)."],["WhereEqPredicate","An equality predicate (e.g., `T = int`); currently unsupported."],["WhereRegionPredicate","A lifetime predicate (e.g., `'a: 'b + 'c`)."]],"type":[["BinOp",""],["GenericBounds",""],["Lit","A literal."]]};