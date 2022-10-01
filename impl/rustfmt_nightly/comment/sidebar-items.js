window.SIDEBAR_ITEMS = {"constant":[["RUSTFMT_CUSTOM_COMMENT_PREFIX",""]],"enum":[["CharClassesStatus",""],["CodeBlockAttribute","Enum indicating if the code block contains rust based on attributes"],["CodeCharKind","Distinguish between functional part of code and comments"],["CommentStyle",""],["FullCodeCharKind","Distinguish between functional part of code and comments, describing opening and closing of comments for ease when chunking code from tagged characters"]],"fn":[["changed_comment_content","Returns `true` if the two strings of code have the same payload of comments. The payload of comments is everything in the string except:"],["combine_strs_with_missing_comments","Combine `prev_str` and `next_str` into a single `String`. `span` may contain comments between two strings. If there are such comments, then that will be recovered. If `allow_extend` is true and there is no comment between the two strings, then they will be put on a single line as long as doing so does not exceed max width."],["comment_style",""],["contains_comment","Returns `true` if text contains any comment."],["custom_opener",""],["filter_normal_code",""],["find_comment_end",""],["has_url","Returns `true` if the given string MAY include URLs or alike."],["hide_sharp_behind_comment",""],["identify_comment",""],["is_custom_comment",""],["is_last_comment_block","Returns true if the last line of the passed string finishes with a block-comment."],["is_raw_string_suffix",""],["itemized_block_quote_start","Determine the line_start when formatting markdown block quotes. The original line_start likely contains indentation (whitespaces), which we’d like to replace with ’> ’ characters."],["left_trim_comment_line","Trims comment characters and possibly a single space from the left of a string. Does not trim all whitespace. If a single space is trimmed from the left of the string, this function returns true."],["light_rewrite_comment","Trims whitespace and aligns to indent, but otherwise does not change comments."],["recover_comment_removed","Checks is `new` didn’t miss any comment from `span`, if it removed any, return previous text (if it fits in the width/offset, else return `None`), else return `new`"],["recover_missing_comment_in_span","Recover the missing comments in the specified span, if available. The layout of the comments will be preserved as long as it does not break the code and its total width does not exceed the max width."],["remove_comment_header",""],["rewrite_comment",""],["rewrite_comment_inner",""],["rewrite_doc_comment",""],["rewrite_missing_comment","Given the span, rewrite the missing comment inside it if available. Note that the given span must only include comments (or leading/trailing whitespaces)."],["trim_custom_comment_prefix",""],["trim_end_unless_two_whitespaces","Trim trailing whitespaces unless they consist of two or more whitespaces."]],"struct":[["CharClasses",""],["CommentCodeSlices","Iterator over an alternating sequence of functional and commented parts of a string. The first item is always a, possibly zero length, subslice of functional text. Line style comments contain their ending newlines."],["CommentReducer","Iterator over the ‘payload’ characters of a comment. It skips whitespace, comment start/end marks, and ‘*’ at the beginning of lines. The comment must be one comment, ie not more than one start mark (no multiple line comments, for example)."],["CommentRewrite",""],["ItemizedBlock","Block that is formatted as an item."],["LineClasses","An iterator over the lines of a string, paired with the char kind at the end of the line."],["REFERENCE_LINK_URL","A regex matching reference doc links."],["UngroupedCommentCodeSlices","Iterator over functional and commented parts of a string. Any part of a string is either functional code, either one block comment, either one line comment. Whitespace between comments is functional code. Line comments contain their ending newlines."]],"trait":[["FindUncommented",""],["RichChar",""]]};