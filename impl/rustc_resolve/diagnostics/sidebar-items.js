window.SIDEBAR_ITEMS = {"enum":[["FoundUse","Whether an existing place with an `use` item was found."],["Instead","A suggestion has already been emitted, change the wording slightly to clarify that both are independent options."],["IsPattern","Whether a binding is part of a pattern or an expression. Used for diagnostics."],["SuggestionTarget",""]],"fn":[["extend_span_to_previous_binding","Given a `binding_span`, return the span through to the comma or opening brace of the previous binding."],["find_span_immediately_after_crate_name","Given a `use_span` of a binding within a use statement, returns the highlighted span and if it is a nested use tree."],["find_span_of_binding_until_next_binding","Given a `binding_span` of a binding within a use statement:"],["is_span_suitable_for_use_injection",""],["ordinalize","Convert the given number into the corresponding ordinal"],["reduce_impl_span_to_impl_keyword","Adjust the impl span so that just the `impl` keyword is taken by removing everything after `<` (`\"impl<T> Iterator for A<T> {}\" -> \"impl\"`) and everything after the first whitespace (`\"impl Iterator for A\" -> \"impl\"`)."],["search_for_any_use_in_items",""],["show_candidates","When an entity with a given name is not available in scope, we search for entities with that name in all crates. This method allows outputting the results of this search in a programmer-friendly way"]],"struct":[["ImportSuggestion","A free importable items suggested in case of resolution failure."],["TypoSuggestion",""],["UsePlacementFinder",""]],"type":[["LabelSuggestion","Potential candidate for an undeclared or out-of-scope label - contains the ident of a similarly named label and whether or not it is reachable."],["Res",""],["Suggestion","A vector of spans and replacements, a message and applicability."]]};