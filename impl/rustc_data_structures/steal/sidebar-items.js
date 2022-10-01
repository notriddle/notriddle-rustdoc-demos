window.SIDEBAR_ITEMS = {"struct":[["Steal","The `Steal` struct is intended to used as the value for a query. Specifically, we sometimes have queries (cough MIR cough) where we create a large, complex value that we want to iteratively update (e.g., optimize). We could clone the value for each optimization, but that’d be expensive. And yet we don’t just want to mutate it in place, because that would spoil the idea that queries are these pure functions that produce an immutable value (since if you did the query twice, you could observe the mutations). So instead we have the query produce a `&'tcx Steal<mir::Body<'tcx>>` (to be very specific). Now we can read from this as much as we want (using `borrow()`), but you can also `steal()`. Once you steal, any further attempt to read will panic. Therefore, we know that – assuming no ICE – nobody is observing the fact that the MIR was updated."]]};