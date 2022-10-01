window.SIDEBAR_ITEMS = {"enum":[["CoverageStatement",""]],"fn":[["filtered_statement_span","If the MIR `Statement` has a span contributive to computing coverage spans, return it; otherwise return `None`."],["filtered_terminator_span","If the MIR `Terminator` has a span contributive to computing coverage spans, return it; otherwise return `None`."],["function_source_span","Returns an extrapolated span (pre-expansion) corresponding to a range within the function’s body source. This span is guaranteed to be contained within, or equal to, the `body_span`. If the extrapolated span is not contained within the `body_span`, the `body_span` is returned."]],"struct":[["CoverageSpan","A BCB is deconstructed into one or more `Span`s. Each `Span` maps to a `CoverageSpan` that references the originating BCB and one or more MIR `Statement`s and/or `Terminator`s. Initially, the `Span`s come from the `Statement`s and `Terminator`s, but subsequent transforms can combine adjacent `Span`s and `CoverageSpan` from the same BCB, merging the `CoverageStatement` vectors, and the `Span`s to cover the extent of the combined `Span`s."],["CoverageSpans","Converts the initial set of `CoverageSpan`s (one per MIR `Statement` or `Terminator`) into a minimal set of `CoverageSpan`s, using the BCB CFG to determine where it is safe and useful to:"]]};