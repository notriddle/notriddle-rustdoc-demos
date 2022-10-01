window.SIDEBAR_ITEMS = {"fn":[["adt_def",""],["are_suggestable_generic_args",""],["asm_target_features","Computes the set of target features used in a function for the purposes of inline assembly."],["bad_placeholder",""],["check_link_name_xor_ordinal",""],["check_link_ordinal",""],["check_target_feature_trait_unsafe","Checks the function annotated with `#[target_feature]` is not a safe trait method implementation, reporting an error if it is."],["codegen_fn_attrs",""],["collect_mod_item_types",""],["compute_sig_of_foreign_fn_decl",""],["convert_enum_variant_types",""],["convert_impl_item",""],["convert_item",""],["convert_trait_item",""],["convert_variant",""],["convert_variant_ctor",""],["early_bound_lifetimes_from_generics","Returns the early-bound lifetimes declared in this generics listing. For anything other than fns/methods, this is just all the lifetimes that are declared. For fns or methods, we have to screen out those that do not appear in any where-clauses etc using `resolve_lifetime::early_bound_lifetimes`."],["fn_sig",""],["from_target_feature",""],["generator_kind",""],["get_infer_ret_ty",""],["get_new_lifetime_name","Synthesize a new lifetime name that doesn’t clash with any of the lifetimes already present."],["impl_polarity",""],["impl_trait_ref",""],["infer_return_ty_for_fn_sig",""],["is_foreign_item",""],["is_suggestable_infer_ty","Whether `ty` is a type with `_` placeholders that can be inferred. Used in diagnostics only to use inference to provide suggestions for the appropriate type if possible."],["linkage_by_name",""],["placeholder_type_error","If there are any placeholder types (`_`), emit an error explaining that this is not allowed and suggest adding type parameters in the appropriate place, taking into consideration any and all already existing generic type parameters to avoid suggesting a name that is already in use."],["placeholder_type_error_diag",""],["predicates_defined_on","Returns a list of type predicates for the definition with ID `def_id`, including inferred lifetime constraints. This includes all predicates returned by `explicit_predicates_of`, plus inferred constraints concerning which regions outlive other regions."],["provide",""],["reject_placeholder_type_signatures_in_item",""],["should_inherit_track_caller","Checks if the provided DefId is a method in a trait impl for a trait which has track_caller applied to the method prototype."],["trait_def",""]],"mod":[["generics_of",""],["item_bounds",""],["predicates_of",""],["type_of",""]],"struct":[["CollectItemTypesVisitor",""],["HirPlaceholderCollector",""],["ItemCtxt","Context specific to some particular item. This is what implements [`AstConv`]."]]};