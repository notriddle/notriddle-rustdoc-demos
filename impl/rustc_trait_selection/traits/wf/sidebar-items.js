window.SIDEBAR_ITEMS = {"enum":[["Elaborate","Controls whether we “elaborate” supertraits and so forth on the WF predicates. This is a kind of hack to address #43784. The underlying problem in that issue was a trait structure like:"]],"fn":[["extend_cause_with_original_assoc_item_obligation",""],["object_region_bounds","Given an object type like `SomeTrait + Send`, computes the lifetime bounds that must hold on the elided self type. These are derived from the declarations of `SomeTrait`, `Send`, and friends – if they declare `trait SomeTrait : 'static`, for example, then `'static` would appear in the list. The hard work is done by `infer::required_region_bounds`, see that for more information."],["obligations","Returns the set of obligations needed to make `arg` well-formed. If `arg` contains unresolved inference variables, this may include further WF obligations. However, if `arg` IS an unresolved inference variable, returns `None`, because we are not able to make any progress at all. This is to prevent “livelock” where we say “$0 is WF if $0 is WF”."],["predicate_obligations",""],["required_region_bounds","Given a set of predicates that apply to an object type, returns the region bounds that the (erased) `Self` type must outlive. Precisely because the `Self` type is erased, the parameter `erased_self_ty` must be supplied to indicate what type has been used to represent `Self` in the predicates themselves. This should really be a unique type; `FreshTy(0)` is a popular choice."],["trait_obligations","Returns the obligations that make this trait reference well-formed.  For example, if there is a trait `Set` defined like `trait Set<K:Eq>`, then the trait reference `Foo: Set<Bar>` is WF if `Bar: Eq`."]],"struct":[["WfPredicates",""]]};