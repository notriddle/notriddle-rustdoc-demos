window.SIDEBAR_ITEMS = {"enum":[["Constructor","A value can be decomposed into a constructor applied to some fields. This struct represents the constructor. See also `Fields`."],["IntBorder","Represents a border between 2 integers. Because the intervals spanning borders must be able to cover every integer, we need to be able to represent 2^128 + 1 such borders."],["SliceKind",""]],"fn":[["expand_or_pat","Recursively expand this pattern into its subpatterns. Only useful for or-patterns."]],"struct":[["DeconstructedPat","Values and patterns can be represented as a constructor applied to some fields. This represents a pattern in this form. This also keeps track of whether the pattern has been found reachable during analysis. For this reason we should be careful not to clone patterns for which we care about that. Use `clone_and_forget_reachability` if you’re sure."],["Fields","A value can be decomposed into a constructor applied to some fields. This struct represents those fields, generalized to allow patterns in each field. See also `Constructor`."],["IntRange","An inclusive interval, used for precise integer exhaustiveness checking. `IntRange`s always store a contiguous range. This means that values are encoded such that `0` encodes the minimum value for the integer, regardless of the signedness. For example, the pattern `-128..=127i8` is encoded as `0..=255`. This makes comparisons and arithmetic on interval endpoints much more straightforward. See `signed_bias` for details."],["Slice","A constructor for array and slice patterns."],["SplitIntRange","A range of integers that is partitioned into disjoint subranges. This does constructor splitting for integer ranges as explained at the top of the file."],["SplitVarLenSlice","This computes constructor splitting for variable-length slices, as explained at the top of the file."],["SplitWildcard","A wildcard constructor that we split relative to the constructors in the matrix, as explained at the top of the file."]]};