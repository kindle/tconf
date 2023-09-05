"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocData = void 0;
/* eslint-disable no-mixed-spaces-and-tabs */
class DocData {
}
exports.DocData = DocData;
DocData.metaData = [
    {
        "name": "SetReal",
        "description": "--DEPRECATED-- Use 'real' instead. Constructs a fixed real value, give coefficient and exponent.",
        "doc": "SetReal.docx",
        "tags": [
            "conversion",
            "real",
            "fixed",
            "math"
        ],
        "functionSignature": "SetReal ( coefficient, exponent ) : real",
        "parameters": [
            "[in] coefficient : int64\nint given to be set as coefficient",
            "[in] exponent : int64\nint given to be set as exponent"
        ]
    },
    {
        "name": "real",
        "description": "Constructs a fixed real value, give coefficient and exponent.",
        "doc": "real.docx",
        "tags": [
            "conversion",
            "real",
            "fixed",
            "math"
        ],
        "functionSignature": "real ( coefficient, exponent ) : real",
        "parameters": [
            "[in] coefficient : int64\nint given to be set as coefficient",
            "[in] exponent : int64\nint given to be set as exponent"
        ]
    },
    {
        "name": "insert_rank",
        "description": "insert a rowkey at the rank specified, ranks below the specified rank will shift automatically returns #true if rowkey exists and rank inserted",
        "doc": "insert_rank.docx",
        "tags": [
            "book",
            "level2"
        ],
        "functionSignature": "insert_rank ( book_name, rank_name, rank, row_key ) : bool",
        "parameters": [
            "[in_out] book_name : Level2BookDepthHelper\nint given to be set as book_name",
            "[in] rank_name : ascii_string\nint given to be set as rank_name",
            "[in] rank : int64\nint given to be set as rank",
            "[in] row_key : ascii_string\nint given to be set as row_key"
        ]
    },
    {
        "name": "get_rank",
        "description": "Gets a rowkey via rank in level 2 object. Returns #true if rank exists.",
        "doc": "get_rank.docx",
        "tags": [
            "book",
            "level2"
        ],
        "functionSignature": "get_rank ( book_name, rank_name, rank ) : variant",
        "parameters": [
            "[in_out] book_name : Level2BookDepthHelper\nint given to be set as book_name",
            "[in] rank_name : ascii_string\nint given to be set as rank_name",
            "[in] rank : int64\nint given to be set as rank"
        ]
    },
    {
        "name": "add_row",
        "description": "Adds an empty row to level 2 object. Introduces a location for the row in tconf",
        "doc": "add_row.docx",
        "tags": [
            "book",
            "level2"
        ],
        "functionSignature": "add_row ( sys, book_name, variable_name, row_key ) : bool",
        "parameters": [
            "[in_out] sys : InternalBridge\nint given to be set as sys",
            "[in_out] book_name : Level2Book\nint given to be set as book_name",
            "[in] variable_name : ascii_string\nint given to be set as variable_name",
            "[in] row_key : ascii_string\nint given to be set as row_key"
        ]
    },
    {
        "name": "add_to_index",
        "description": "Adds an index for row with indexKey(FixedReal) Variant",
        "doc": "add_to_index.docx",
        "tags": [
            "book",
            "level2",
            "topofbook"
        ],
        "functionSignature": "add_to_index ( book_name, index_name, row_key, sort_key )",
        "parameters": [
            "[in_out] book_name : Level2BookIndex\nint given to be set as book_name",
            "[in] index_name : ascii_string\nint given to be set as index_name",
            "[in] row_key : ascii_string\nint given to be set as row_key",
            "[in] sort_key : variant\nint given to be set as sort_key"
        ]
    },
    {
        "name": "add_to_custom_index",
        "description": "Adds a custom index for row. The custom index must be already created by configuration in FTE. The row must have every index field defined in the custom index. Return #true if the row is successfully added to the index, otherwise #false.",
        "doc": "add_to_custom_index.docx",
        "tags": [
            "book",
            "level2",
            "topofbook"
        ],
        "functionSignature": "add_to_custom_index ( book_name, index_name, row_key ) : bool",
        "parameters": [
            "[in_out] book_name : Level2BookIndex\nint given to be set as book_name",
            "[in] index_name : ascii_string\nint given to be set as index_name",
            "[in] row_key : ascii_string\nint given to be set as row_key"
        ]
    },
    {
        "name": "update_custom_index",
        "description": "Update the position of the row in the custom index. The custom index must be already created by configuration in FTE. Also the row must have every index field defined in the custom index. Return #true if the row is successfully updated in the index, otherwise #false.",
        "doc": "update_custom_index.docx",
        "tags": [
            "book",
            "level2",
            "topofbook"
        ],
        "functionSignature": "update_custom_index ( book_name, index_name, row_key ) : variant",
        "parameters": [
            "[in_out] book_name : Level2BookIndex\nint given to be set as book_name",
            "[in] index_name : ascii_string\nint given to be set as index_name",
            "[in] row_key : ascii_string\nint given to be set as row_key"
        ]
    },
    {
        "name": "bts_add",
        "description": "Adds a trade to the trade stack. Returns a positive position within trade stack, or zero if failed to be added.",
        "doc": "bts_add.docx",
        "tags": [
            "add",
            "bts",
            "trade-stack"
        ],
        "functionSignature": "bts_add ( bts, key, timestamp, price, volume, is_last_eligible, is_open_eligible, is_high_eligible, is_low_eligible, custom_fields_array ) : variant",
        "parameters": [
            "[in_out] bts : BasicTradeStack\nint given to be set as bts",
            "[in] key : variant\nint given to be set as key",
            "[in] timestamp : variant\nint given to be set as timestamp",
            "[in] price : variant\nint given to be set as price",
            "[in] volume : variant\nint given to be set as volume",
            "[in] is_last_eligible : int64\nint given to be set as is_last_eligible",
            "[in] is_open_eligible : int64\nint given to be set as is_open_eligible",
            "[in] is_high_eligible : int64\nint given to be set as is_high_eligible",
            "[in] is_low_eligible : int64\nint given to be set as is_low_eligible",
            "[in] custom_fields_array : array\nint given to be set as custom_fields_array"
        ]
    },
    {
        "name": "bts_clear",
        "description": "Removes all elements from a given trade stack.",
        "doc": "bts_clear.docx",
        "tags": [
            "bts",
            "clear",
            "empty",
            "trade-stack"
        ],
        "functionSignature": "bts_clear ( bts )",
        "parameters": [
            "[in_out] bts : BasicTradeStack\nint given to be set as bts"
        ]
    },
    {
        "name": "bts_find",
        "description": "Finds a trade matching a given key and places its values into provided output parameters. Returns a positive position within the trade stack, or zero if not found.",
        "doc": "bts_find.docx",
        "tags": [
            "bts",
            "find",
            "lookup",
            "search",
            "trade-stack"
        ],
        "functionSignature": "bts_find ( bts, key, timestamp, price, volume, is_last_eligible, is_open_eligible, is_high_eligible, is_low_eligible, custom_fields_array ) : variant",
        "parameters": [
            "[in_out] bts : BasicTradeStack\nint given to be set as bts",
            "[in] key : variant\nint given to be set as key",
            "[out] timestamp : variant\nint given to be set as timestamp",
            "[out] price : variant\nint given to be set as price",
            "[out] volume : variant\nint given to be set as volume",
            "[out] is_last_eligible : int64\nint given to be set as is_last_eligible",
            "[out] is_open_eligible : int64\nint given to be set as is_open_eligible",
            "[out] is_high_eligible : int64\nint given to be set as is_high_eligible",
            "[out] is_low_eligible : int64\nint given to be set as is_low_eligible",
            "[in_out] custom_fields_array : array\nint given to be set as custom_fields_array"
        ]
    },
    {
        "name": "bts_get_high_trade",
        "description": "Gets information about a trade associated with the current eligible high price.Returns #true if trade was available, #false otherwise.",
        "doc": "bts_get_high_trade.docx",
        "tags": [
            "bts",
            "high",
            "price",
            "trade-stack"
        ],
        "functionSignature": "bts_get_high_trade ( bts, key, timestamp, price, volume, is_last_eligible, is_open_eligible, is_high_eligible, is_low_eligible, custom_fields_array ) : variant",
        "parameters": [
            "[in_out] bts : BasicTradeStack\nint given to be set as bts",
            "[out] key : variant\nint given to be set as key",
            "[out] timestamp : variant\nint given to be set as timestamp",
            "[out] price : variant\nint given to be set as price",
            "[out] volume : variant\nint given to be set as volume",
            "[out] is_last_eligible : int64\nint given to be set as is_last_eligible",
            "[out] is_open_eligible : int64\nint given to be set as is_open_eligible",
            "[out] is_high_eligible : int64\nint given to be set as is_high_eligible",
            "[out] is_low_eligible : int64\nint given to be set as is_low_eligible",
            "[in_out] custom_fields_array : array\nint given to be set as custom_fields_array"
        ]
    },
    {
        "name": "bts_get_last_trade",
        "description": "Gets information about a trade associated with the last eligible trade price. Returns #true if trade was available, #false otherwise.",
        "doc": "bts_get_last_trade.docx",
        "tags": [
            "bts",
            "last",
            "price",
            "trade-stack"
        ],
        "functionSignature": "bts_get_last_trade ( bts, key, timestamp, price, volume, is_last_eligible, is_open_eligible, is_high_eligible, is_low_eligible, custom_fields_array ) : variant",
        "parameters": [
            "[in_out] bts : BasicTradeStack\nint given to be set as bts",
            "[out] key : variant\nint given to be set as key",
            "[out] timestamp : variant\nint given to be set as timestamp",
            "[out] price : variant\nint given to be set as price",
            "[out] volume : variant\nint given to be set as volume",
            "[out] is_last_eligible : int64\nint given to be set as is_last_eligible",
            "[out] is_open_eligible : int64\nint given to be set as is_open_eligible",
            "[out] is_high_eligible : int64\nint given to be set as is_high_eligible",
            "[out] is_low_eligible : int64\nint given to be set as is_low_eligible",
            "[in_out] custom_fields_array : array\nint given to be set as custom_fields_array"
        ]
    },
    {
        "name": "bts_get_low_trade",
        "description": "Gets information about a trade associated with the current eligible low price. Returns #true if trade was available, #false otherwise.",
        "doc": "bts_get_low_trade.docx",
        "tags": [
            "bts",
            "low",
            "price",
            "trade-stack"
        ],
        "functionSignature": "bts_get_low_trade ( bts, key, timestamp, price, volume, is_last_eligible, is_open_eligible, is_high_eligible, is_low_eligible, custom_fields_array ) : variant",
        "parameters": [
            "[in_out] bts : BasicTradeStack\nint given to be set as bts",
            "[out] key : variant\nint given to be set as key",
            "[out] timestamp : variant\nint given to be set as timestamp",
            "[out] price : variant\nint given to be set as price",
            "[out] volume : variant\nint given to be set as volume",
            "[out] is_last_eligible : int64\nint given to be set as is_last_eligible",
            "[out] is_open_eligible : int64\nint given to be set as is_open_eligible",
            "[out] is_high_eligible : int64\nint given to be set as is_high_eligible",
            "[out] is_low_eligible : int64\nint given to be set as is_low_eligible",
            "[in_out] custom_fields_array : array\nint given to be set as custom_fields_array"
        ]
    },
    {
        "name": "bts_get_most_recent_trade",
        "description": "Gets information about a trade associated with the most recently traded price (regardless whether the price was last-eligible or not). Returns #true if trade was available, #false otherwise.",
        "doc": "bts_get_most_recent_trade.docx",
        "tags": [
            "bts",
            "last",
            "price",
            "recent",
            "trade-stack"
        ],
        "functionSignature": "bts_get_most_recent_trade ( bts, key, timestamp, price, volume, is_last_eligible, is_open_eligible, is_high_eligible, is_low_eligible, custom_fields_array ) : variant",
        "parameters": [
            "[in_out] bts : BasicTradeStack\nint given to be set as bts",
            "[out] key : variant\nint given to be set as key",
            "[out] timestamp : variant\nint given to be set as timestamp",
            "[out] price : variant\nint given to be set as price",
            "[out] volume : variant\nint given to be set as volume",
            "[out] is_last_eligible : int64\nint given to be set as is_last_eligible",
            "[out] is_open_eligible : int64\nint given to be set as is_open_eligible",
            "[out] is_high_eligible : int64\nint given to be set as is_high_eligible",
            "[out] is_low_eligible : int64\nint given to be set as is_low_eligible",
            "[in_out] custom_fields_array : array\nint given to be set as custom_fields_array"
        ]
    },
    {
        "name": "bts_get_nth_trade",
        "description": "Retreives last eligible trade in a given position in the trade stack and places its values into provided output parameters. Returns #true if trade was available, #false otherwise.",
        "doc": "bts_get_nth_trade.docx",
        "tags": [
            "bts",
            "index",
            "trade-stack"
        ],
        "functionSignature": "bts_get_nth_trade ( bts, position, key, timestamp, price, volume, is_last_eligible, is_open_eligible, is_high_eligible, is_low_eligible, custom_fields_array ) : variant",
        "parameters": [
            "[in_out] bts : BasicTradeStack\nint given to be set as bts",
            "[in] position : variant\nint given to be set as position",
            "[out] key : variant\nint given to be set as key",
            "[out] timestamp : variant\nint given to be set as timestamp",
            "[out] price : variant\nint given to be set as price",
            "[out] volume : variant\nint given to be set as volume",
            "[out] is_last_eligible : int64\nint given to be set as is_last_eligible",
            "[out] is_open_eligible : int64\nint given to be set as is_open_eligible",
            "[out] is_high_eligible : int64\nint given to be set as is_high_eligible",
            "[out] is_low_eligible : int64\nint given to be set as is_low_eligible",
            "[in_out] custom_fields_array : array\nint given to be set as custom_fields_array"
        ]
    },
    {
        "name": "bts_get_open_trade",
        "description": "Gets information about a trade associated with the eligible opening price. Returns #true if trade was available, #false otherwise.",
        "doc": "bts_get_open_trade.docx",
        "tags": [
            "bts",
            "open",
            "price",
            "trade-stack"
        ],
        "functionSignature": "bts_get_open_trade ( bts, key, timestamp, price, volume, is_last_eligible, is_open_eligible, is_high_eligible, is_low_eligible, custom_fields_array ) : variant",
        "parameters": [
            "[in_out] bts : BasicTradeStack\nint given to be set as bts",
            "[out] key : variant\nint given to be set as key",
            "[out] timestamp : variant\nint given to be set as timestamp",
            "[out] price : variant\nint given to be set as price",
            "[out] volume : variant\nint given to be set as volume",
            "[out] is_last_eligible : int64\nint given to be set as is_last_eligible",
            "[out] is_open_eligible : int64\nint given to be set as is_open_eligible",
            "[out] is_high_eligible : int64\nint given to be set as is_high_eligible",
            "[out] is_low_eligible : int64\nint given to be set as is_low_eligible",
            "[in_out] custom_fields_array : array\nint given to be set as custom_fields_array"
        ]
    },
    {
        "name": "bts_get_first_different_price",
        "description": "Returns the first price that is different then the input price. Will return a blank price if no different prices are found.",
        "doc": "bts_get_first_different_price.docx",
        "tags": [
            "bts",
            "trade-stack"
        ],
        "functionSignature": "bts_get_first_different_price ( bts, price ) : variant",
        "parameters": [
            "[in_out] bts : BasicTradeStack\nint given to be set as bts",
            "[in] price : variant\nint given to be set as price"
        ]
    },
    {
        "name": "bts_remove_last",
        "description": "Removes last matching trade from the stack which match the provided key. Returns #true if at least one trade was removed, #false otherwise.",
        "doc": "bts_remove_last.docx",
        "tags": [
            "bts",
            "delete",
            "remove",
            "trade-stack"
        ],
        "functionSignature": "bts_remove_last ( bts, key ) : variant",
        "parameters": [
            "[in_out] bts : BasicTradeStack\nint given to be set as bts",
            "[in] key : variant\nint given to be set as key"
        ]
    },
    {
        "name": "bts_get_trade_keys",
        "description": "Gets trade keys corresponding to the 'last' trade stack and stores them in the array provided. The number of extracted prices will match the number of items passed within the array. For example: If you want top 5 keys , pass in array of 5 elements. If you just want 3 trade keys, pass in array of 3 elements. If number of available prices is lesser than the number of array elements, array elements will be set to 'absent'. This transform returns an integer indicating how many prices were successfully extracted.",
        "doc": "bts_get_trade_keys.docx",
        "tags": [
            "bts",
            "get",
            "key",
            "trade",
            "trade-stack"
        ],
        "functionSignature": "bts_get_trade_keys ( bts, trade_key_array ) : variant",
        "parameters": [
            "[in_out] bts : BasicTradeStack\nint given to be set as bts",
            "[in_out] trade_key_array : array\nint given to be set as trade_key_array"
        ]
    },
    {
        "name": "bts_get_trade_prices",
        "description": "Gets trade prices corresponding to the 'last' trade stack and stores them in the array provided. The number of extracted prices will match the number of items passed within the array. For example: If you want top 5 prices (equivalent of TRDPRC_1 through TRDPRC_5), pass in array of 5 elements. If you just want 3 trade prices, pass in array of 3 elements. If number of available prices is lesser than the number of array elements, array elements will be set to 'absent'. This transform returns an integer indicating how many prices were successfully extracted.",
        "doc": "bts_get_trade_prices.docx",
        "tags": [
            "bts",
            "get",
            "price",
            "trade",
            "trade-stack"
        ],
        "functionSignature": "bts_get_trade_prices ( bts, trade_price_array ) : variant",
        "parameters": [
            "[in_out] bts : BasicTradeStack\nint given to be set as bts",
            "[in_out] trade_price_array : array\nint given to be set as trade_price_array"
        ]
    },
    {
        "name": "bts_get_trade_times",
        "description": "Gets trade volumes corresponding to the 'last' trade stack and stores them in the array provided. The number of extracted volumes will match the number of items passed within the array. For example: If you want top 5 volumes, pass in array of 5 elements. If you just want 3 trade volumes, pass in an array of 3 elements. If number of available volumes is lesser than the number of array elements, array elements will be set to 'absent'. This transform returns an integer indicating how many volumes were successfully extracted.",
        "doc": "bts_get_trade_times.docx",
        "tags": [
            "bts",
            "get",
            "time",
            "trade",
            "trade-stack"
        ],
        "functionSignature": "bts_get_trade_times ( bts, trade_times_array ) : variant",
        "parameters": [
            "[in_out] bts : BasicTradeStack\nint given to be set as bts",
            "[in_out] trade_times_array : array\nint given to be set as trade_times_array"
        ]
    },
    {
        "name": "bts_get_trade_volumes",
        "description": "Gets trade volumes corresponding to the 'last' trade stack and stores them in the array provided. The number of extracted volumes will match the number of items passed within the array. For example: If you want top 5 volumes (equivalent of TRDVOL_1 through TRDVOL_5), pass in array of 5 elements. If you just want 3 trade volumes, pass in an array of 3 elements. If number of available volumes is lesser than the number of array elements, array elements will be set to 'absent'. This transform returns an integer indicating how many volumes were successfully extracted.",
        "doc": "bts_get_trade_volumes.docx",
        "tags": [
            "bts",
            "get",
            "quantity",
            "trade",
            "trade-stack",
            "volume"
        ],
        "functionSignature": "bts_get_trade_volumes ( bts, trade_volumes_array ) : variant",
        "parameters": [
            "[in_out] bts : BasicTradeStack\nint given to be set as bts",
            "[in_out] trade_volumes_array : array\nint given to be set as trade_volumes_array"
        ]
    },
    {
        "name": "bts_remove",
        "description": "Removes all trades from the stack which match the provided key. Returns #true if at least one trade was removed, #false otherwise.",
        "doc": "bts_remove.docx",
        "tags": [
            "bts",
            "delete",
            "remove",
            "trade-stack"
        ],
        "functionSignature": "bts_remove ( bts, key ) : variant",
        "parameters": [
            "[in_out] bts : BasicTradeStack\nint given to be set as bts",
            "[in] key : variant\nint given to be set as key"
        ]
    },
    {
        "name": "bts_update",
        "description": "Replaces a trade matching provided key with a provided trade. Returns a positive position within the trade stack, or zero if update failed. Please note that the trade must already be within the trade stack and it will not be updated when not found.",
        "doc": "bts_update.docx",
        "tags": [
            "bts",
            "replace",
            "trade-stack",
            "update"
        ],
        "functionSignature": "bts_update ( bts, key, timestamp, price, volume, is_last_eligible, is_open_eligible, is_high_eligible, is_low_eligible, custom_fields_array ) : variant",
        "parameters": [
            "[in_out] bts : BasicTradeStack\nint given to be set as bts",
            "[in] key : variant\nint given to be set as key",
            "[in] timestamp : variant\nint given to be set as timestamp",
            "[in] price : variant\nint given to be set as price",
            "[in] volume : variant\nint given to be set as volume",
            "[in] is_last_eligible : int64\nint given to be set as is_last_eligible",
            "[in] is_open_eligible : int64\nint given to be set as is_open_eligible",
            "[in] is_high_eligible : int64\nint given to be set as is_high_eligible",
            "[in] is_low_eligible : int64\nint given to be set as is_low_eligible",
            "[in] custom_fields_array : array\nint given to be set as custom_fields_array"
        ]
    },
    {
        "name": "clear_book",
        "description": "Clear a level 2 book.",
        "doc": "clear_book.docx",
        "tags": [
            "book",
            "level2"
        ],
        "functionSignature": "clear_book ( book_name )",
        "parameters": [
            "[in_out] book_name : Level2Book\nint given to be set as book_name"
        ]
    },
    {
        "name": "convert_date",
        "description": "Converts GMT date into a given timezone",
        "doc": "convert_date.docx",
        "tags": [
            "conversion",
            "date-time"
        ],
        "functionSignature": "convert_date ( time_service, date, time, targetTimeZoneId ) : variant",
        "parameters": [
            "[in_out] time_service : TimeService\nint given to be set as time_service",
            "[in] date : date\nint given to be set as date",
            "[in] time : time\nint given to be set as time",
            "[in] targetTimeZoneId : ascii_string\nint given to be set as targetTimeZoneId"
        ]
    },
    {
        "name": "convert_datetime",
        "description": "Converts GMT date-time into a given timezone",
        "doc": "convert_datetime.docx",
        "tags": [
            "conversion",
            "date-time"
        ],
        "functionSignature": "convert_datetime ( time_service, date, time, targetTimeZoneId ) : variant",
        "parameters": [
            "[in_out] time_service : TimeService\nint given to be set as time_service",
            "[in] date : date\nint given to be set as date",
            "[in] time : time\nint given to be set as time",
            "[in] targetTimeZoneId : ascii_string\nint given to be set as targetTimeZoneId"
        ]
    },
    {
        "name": "convert_string_to_fixedreal",
        "description": "--DEPRECATED-- Use 'to_real' instead. Convert a string to fixedreal.",
        "doc": "convert_string_to_fixedreal.docx",
        "tags": [
            "conversion",
            "FixedReal",
            "parse",
            "string"
        ],
        "functionSignature": "convert_string_to_fixedreal ( string ) : real",
        "parameters": [
            "[in] string : variant\nint given to be set as string"
        ]
    },
    {
        "name": "convert_to_uint64",
        "description": "--DEPRECATED-- use to_uint instead. Convert a int to uint.",
        "doc": "convert_to_uint64.docx",
        "tags": [
            "conversion",
            "uint",
            "int"
        ],
        "functionSignature": "convert_to_uint64 ( int64_t ) : uint64",
        "parameters": [
            "[in] int64_t : variant\nint given to be set as int64_t"
        ]
    },
    {
        "name": "convert_time",
        "description": "Converts GMT time into a given timezone.",
        "doc": "convert_time.docx",
        "tags": [
            "conversion",
            "date-time"
        ],
        "functionSignature": "convert_time ( time_service, date, time, targetTimeZoneId ) : variant",
        "parameters": [
            "[in_out] time_service : TimeService\nint given to be set as time_service",
            "[in] date : date\nint given to be set as date",
            "[in] time : time\nint given to be set as time",
            "[in] targetTimeZoneId : ascii_string\nint given to be set as targetTimeZoneId"
        ]
    },
    {
        "name": "is_utf8",
        "description": "Checks whether the passed in string is encoded in UTF8. For string encoded by non-UTF8, the result will be false.",
        "doc": "is_utf8.docx",
        "tags": [
            "utf8",
            "built-in",
            "char",
            "core",
            "string"
        ],
        "functionSignature": "is_utf8 ( test_val ) : bool",
        "parameters": [
            "[in] test_val : variant\nint given to be set as test_val"
        ]
    },
    {
        "name": "convert_utf8_to_chn_gbk",
        "description": "Local language from UTF-8 to CHN GBK formats for Simplified Chinese",
        "doc": "convert_utf8_to_chn_gbk.docx",
        "tags": [
            "conversion",
            "language",
            "string"
        ],
        "functionSignature": "convert_utf8_to_chn_gbk ( str ) : variant",
        "parameters": [
            "[in] str : variant\nint given to be set as str"
        ]
    },
    {
        "name": "convert_utf8_to_chn_gbk_with_length_check",
        "description": "Local language from UTF-8 to CHN GBK formats for Simplified Chinese",
        "doc": "convert_utf8_to_chn_gbk.docx",
        "tags": [
            "conversion",
            "language",
            "string"
        ],
        "functionSignature": "convert_utf8_to_chn_gbk_with_length_check ( str, max_length ) : variant",
        "parameters": [
            "[in] str : variant\nint given to be set as str",
            "[in] max_length : int64\nint given to be set as max_length"
        ]
    },
    {
        "name": "convert_utf8_to_iso2022c",
        "description": "Local language from UTF-8 to ISO2022C formats for Traditional Chinese",
        "doc": "convert_utf8_to_chn_gbk.docx",
        "tags": [
            "conversion",
            "language",
            "string"
        ],
        "functionSignature": "convert_utf8_to_iso2022c ( str ) : variant",
        "parameters": [
            "[in] str : variant\nint given to be set as str"
        ]
    },
    {
        "name": "convert_utf8_to_iso2022c_with_length_check",
        "description": "Local language from UTF-8 to ISO2022C formats for Traditional Chinese",
        "doc": "convert_utf8_to_chn_gbk.docx",
        "tags": [
            "conversion",
            "language",
            "string"
        ],
        "functionSignature": "convert_utf8_to_iso2022c_with_length_check ( str, max_length ) : variant",
        "parameters": [
            "[in] str : variant\nint given to be set as str",
            "[in] max_length : int64\nint given to be set as max_length"
        ]
    },
    {
        "name": "convert_utf8_to_iso2022j",
        "description": "Local language from UTF-8 to ISO2022J formats",
        "doc": "convert_utf8_to_iso2022j.docx",
        "tags": [
            "conversion",
            "language",
            "string"
        ],
        "functionSignature": "convert_utf8_to_iso2022j ( str ) : variant",
        "parameters": [
            "[in] str : variant\nint given to be set as str"
        ]
    },
    {
        "name": "convert_utf8_to_iso2022j_with_length_check",
        "description": "Local language from UTF-8 to ISO2022J formats",
        "doc": "convert_utf8_to_iso2022j.docx",
        "tags": [
            "conversion",
            "language",
            "string"
        ],
        "functionSignature": "convert_utf8_to_iso2022j_with_length_check ( str, max_length ) : variant",
        "parameters": [
            "[in] str : variant\nint given to be set as str",
            "[in] max_length : int64\nint given to be set as max_length"
        ]
    },
    {
        "name": "copy_all",
        "description": "--DEPRECATED-- Use 'compare_copy_all' or 'copy_all_except' instead. Copy all fids not in exclusion list from one location to another, only works on location containing FIDs. Won't work on none-fid based container like tmp, var. Works on all fields regardless if they are in the encodable FID range.",
        "doc": "copy_all.docx",
        "tags": [
            "copy"
        ],
        "functionSignature": "copy_all ( sys, from, to, exclusion_list )",
        "parameters": [
            "[in_out] sys : InternalBridge\nint given to be set as sys",
            "[in] from : ascii_string\nint given to be set as from",
            "[in] to : ascii_string\nint given to be set as to",
            "[in] exclusion_list : array\nint given to be set as exclusion_list"
        ]
    },
    {
        "name": "copy_all_except",
        "description": "Copy all FIDS not in exclusion list from one location to another, only works on location containing FIDs. Won't work on none-fid based container like tmp, var. Only includes FIDs in the encodable FID range [-32768,+32767]",
        "doc": "copy_all_except.docx",
        "tags": [
            "copy"
        ],
        "functionSignature": "copy_all_except ( sys, from, to, exclusion_list )",
        "parameters": [
            "[in_out] sys : InternalBridge\nint given to be set as sys",
            "[in] from : ascii_string\nint given to be set as from",
            "[in] to : ascii_string\nint given to be set as to",
            "[in] exclusion_list : array\nint given to be set as exclusion_list"
        ]
    },
    {
        "name": "compare_copy_all",
        "description": "Copy all FIDS not in exclusion list from one location to another, only works on location containing FIDs. Only the FIDs whose value is different between source and compareTo location are updated to dest location. Won't work on none-fid based container like tmp, var. Only includes FIDs in the encodable FID range [-32768,+32767]",
        "doc": "compare_copy_all.docx",
        "tags": [
            "copy"
        ],
        "functionSignature": "compare_copy_all ( sys, source, compareTo, to, exclusion_list )",
        "parameters": [
            "[in_out] sys : InternalBridge\nint given to be set as sys",
            "[in] source : ascii_string\nint given to be set as source",
            "[in] compareTo : ascii_string\nint given to be set as compareTo",
            "[in] to : array\nint given to be set as to",
            "[in] exclusion_list : array\nint given to be set as exclusion_list"
        ]
    },
    {
        "name": "create_pub_repeating_group",
        "description": "Adds a named repeating group to the publication. Introduces a variable for the group, and a variable for group's header.",
        "doc": "create_pub_repeating_group.docx",
        "tags": [
            "repeating-group"
        ],
        "functionSignature": "create_pub_repeating_group ( sys, variable_name, repeating_group_key )",
        "parameters": [
            "[in_out] sys : InternalBridge\nint given to be set as sys",
            "[in] variable_name : ascii_string\nint given to be set as variable_name",
            "[in] repeating_group_key : ascii_string\nint given to be set as repeating_group_key"
        ]
    },
    {
        "name": "create_publication",
        "description": "Creates a publication.",
        "doc": "create_publication.docx",
        "tags": [
            "publication"
        ],
        "functionSignature": "create_publication ( sys )",
        "parameters": [
            "[in_out] sys : InternalBridge\nint given to be set as sys"
        ]
    },
    {
        "name": "create_dispatchable",
        "description": "Creates a dispatchable message",
        "doc": "create_dispatchable.docx",
        "tags": [
            "publication"
        ],
        "functionSignature": "create_dispatchable ( sys, variable_name, message_stream_id, line_id )",
        "parameters": [
            "[in_out] sys : InternalBridge\nint given to be set as sys",
            "[in] variable_name : ascii_string\nint given to be set as variable_name",
            "[in] message_stream_id : uint64\nint given to be set as message_stream_id",
            "[in] line_id : ascii_string\nint given to be set as line_id"
        ]
    },
    {
        "name": "date_to_string",
        "description": "Takes a date and a format string and returns a string",
        "doc": "date_to_string.docx",
        "tags": [
            "date",
            "format",
            "string"
        ],
        "functionSignature": "date_to_string ( in_date, format_option ) : ascii_string",
        "parameters": [
            "[in] in_date : variant\nint given to be set as in_date",
            "[in] format_option : ascii_string\nint given to be set as format_option"
        ]
    },
    {
        "name": "delete_rows_range",
        "description": "Delete all rows from book that are within the rank range",
        "doc": "delete_rows_range.docx",
        "tags": [
            "book",
            "level2",
            "delete",
            "rank"
        ],
        "functionSignature": "delete_rows_range ( sys, book_name, rank_name, start_rank, end_rank, is_publication_eligible ) : int64",
        "parameters": [
            "[in_out] sys : InternalBridge\nint given to be set as sys",
            "[in_out] book_name : Level2BookDepthHelper\nint given to be set as book_name",
            "[in] rank_name : ascii_string\nint given to be set as rank_name",
            "[in] start_rank : uint64\nint given to be set as start_rank",
            "[in] end_rank : uint64\nint given to be set as end_rank",
            "[in] is_publication_eligible : uint64\nint given to be set as is_publication_eligible"
        ]
    },
    {
        "name": "delete_unwanted_index_bottom",
        "description": "removes unwanted index from bottom if index size is greater than max level",
        "doc": "delete_unwanted_index_bottom.docx",
        "tags": [
            "book",
            "full depth",
            "level2",
            "mbp"
        ],
        "functionSignature": "delete_unwanted_index_bottom ( sys, book_name, index_name, max_level )",
        "parameters": [
            "[in_out] sys : OutputMessage\nint given to be set as sys",
            "[in_out] book_name : Level2BookDepthHelper\nint given to be set as book_name",
            "[in] index_name : ascii_string\nint given to be set as index_name",
            "[in] max_level : uint64\nint given to be set as max_level"
        ]
    },
    {
        "name": "delete_unwanted_index_top",
        "description": "removes unwanted index from top if index size is greater than max level",
        "doc": "delete_unwanted_index_top.docx",
        "tags": [
            "book",
            "full depth",
            "level2",
            "mbp"
        ],
        "functionSignature": "delete_unwanted_index_top ( sys, book_name, index_name, max_level )",
        "parameters": [
            "[in_out] sys : OutputMessage\nint given to be set as sys",
            "[in_out] book_name : Level2BookDepthHelper\nint given to be set as book_name",
            "[in] index_name : ascii_string\nint given to be set as index_name",
            "[in] max_level : uint64\nint given to be set as max_level"
        ]
    },
    {
        "name": "delete_unwanted_rows",
        "description": "removes all unwanted rows, requires book that implements BookDepthHelper interface",
        "doc": "delete_unwanted_rows.docx",
        "tags": [
            "book",
            "full depth",
            "level2",
            "mbp"
        ],
        "functionSignature": "delete_unwanted_rows ( sys, book_name )",
        "parameters": [
            "[in_out] sys : OutputMessage\nint given to be set as sys",
            "[in_out] book_name : Level2BookDepthHelper\nint given to be set as book_name"
        ]
    },
    {
        "name": "delete_user_defined_rows",
        "description": "Removes all rows from book that match the user-defined criteria",
        "doc": "delete_user_defined_rows.docx",
        "tags": [
            "book",
            "level2",
            "delete"
        ],
        "functionSignature": "delete_user_defined_rows ( sys, book_name, row_level_fid_name, is_publication_eligible, user_specified_value_array ) : bool",
        "parameters": [
            "[in_out] sys : InternalBridge\nint given to be set as sys",
            "[in_out] book_name : Level2Book\nint given to be set as book_name",
            "[in] row_level_fid_name : ascii_string\nint given to be set as row_level_fid_name",
            "[in] is_publication_eligible : uint64\nint given to be set as is_publication_eligible",
            "[in] user_specified_value_array : array\nint given to be set as user_specified_value_array"
        ]
    },
    {
        "name": "exists",
        "description": "Checks is a given FID is present",
        "doc": "exists.docx",
        "tags": [
            "built-in",
            "core",
            "null"
        ],
        "functionSignature": "exists ( fid ) : bool",
        "parameters": [
            "[in] fid : variant\nint given to be set as fid"
        ]
    },
    {
        "name": "find",
        "description": "Returns the starting position of the first occurrence of string2 within string1, or null if not found. Equivalent to Excel's find function.",
        "doc": "find.docx",
        "tags": [
            "core",
            "string"
        ],
        "functionSignature": "find ( string1, string2 ) : variant",
        "parameters": [
            "[in] string1 : ascii_string\nint given to be set as string1",
            "[in] string2 : ascii_string\nint given to be set as string2"
        ]
    },
    {
        "name": "flush_location",
        "description": "Flush a Location so it is in sync with Level 2 object. Location become readonly after flush.",
        "doc": "flush_location.docx",
        "tags": [
            "level2"
        ],
        "functionSignature": "flush_location ( sys, location_name )",
        "parameters": [
            "[in_out] sys : InternalBridge\nint given to be set as sys",
            "[in] location_name : ascii_string\nint given to be set as location_name"
        ]
    },
    {
        "name": "get_current_hires_time",
        "description": "Gets current high resolution time.",
        "doc": "get_current_hires_time.docx",
        "tags": [
            "date-time",
            "time"
        ],
        "functionSignature": "get_current_hires_time ( time_service ) : time",
        "parameters": [
            "[in_out] time_service : TimeService\nint given to be set as time_service"
        ]
    },
    {
        "name": "get_current_hires_time_in_milliseconds",
        "description": "Gets current high resolution time as milliseconds since midnight.",
        "doc": "get_current_hires_time_in_milliseconds.docx",
        "tags": [
            "date-time",
            "time"
        ],
        "functionSignature": "get_current_hires_time_in_milliseconds ( ) : int64",
        "parameters": []
    },
    {
        "name": "get_date_day",
        "description": "Get day value from a date or datetime",
        "doc": "get_date_day.docx",
        "tags": [
            "date",
            "date-time",
            "get"
        ],
        "functionSignature": "get_date_day ( date_value ) : uint64",
        "parameters": [
            "[in] date_value : variant\nint given to be set as date_value"
        ]
    },
    {
        "name": "get_date_month",
        "description": "Get month value from a date or datetime",
        "doc": "get_date_month.docx",
        "tags": [
            "date",
            "date-time",
            "get"
        ],
        "functionSignature": "get_date_month ( date_value ) : uint64",
        "parameters": [
            "[in] date_value : variant\nint given to be set as date_value"
        ]
    },
    {
        "name": "get_date_year",
        "description": "Get year value from a date or datetime",
        "doc": "get_date_year.docx",
        "tags": [
            "date",
            "date-time",
            "get"
        ],
        "functionSignature": "get_date_year ( date_value ) : uint64",
        "parameters": [
            "[in] date_value : variant\nint given to be set as date_value"
        ]
    },
    {
        "name": "get_index_bottom",
        "description": "Gets the bottom row from an index, Location in tconf is read only",
        "doc": "get_index_bottom.docx",
        "tags": [
            "book",
            "level2",
            "topofbook"
        ],
        "functionSignature": "get_index_bottom ( sys, book_name, variable_name, index_name ) : bool",
        "parameters": [
            "[in_out] sys : InternalBridge\nint given to be set as sys",
            "[in_out] book_name : Level2BookIndex\nint given to be set as book_name",
            "[in] variable_name : ascii_string\nint given to be set as variable_name",
            "[in] index_name : ascii_string\nint given to be set as index_name"
        ]
    },
    {
        "name": "get_index_top",
        "description": "Gets the top row from an index, Location in tconf is read only",
        "doc": "get_index_top.docx",
        "tags": [
            "book",
            "level2",
            "topofbook"
        ],
        "functionSignature": "get_index_top ( sys, book_name, variable_name, index_name ) : bool",
        "parameters": [
            "[in_out] sys : InternalBridge\nint given to be set as sys",
            "[in_out] book_name : Level2BookIndex\nint given to be set as book_name",
            "[in] variable_name : ascii_string\nint given to be set as variable_name",
            "[in] index_name : ascii_string\nint given to be set as index_name"
        ]
    },
    {
        "name": "get_index_top_by_position",
        "description": "Gets the nth top row from an index, Location in tconf is read only",
        "doc": "get_index_top_by_position.docx",
        "tags": [
            "book",
            "level2",
            "topofbook"
        ],
        "functionSignature": "get_index_top_by_position ( sys, book_name, variable_name, index_name, position ) : bool",
        "parameters": [
            "[in_out] sys : InternalBridge\nint given to be set as sys",
            "[in_out] book_name : Level2BookIndex\nint given to be set as book_name",
            "[in] variable_name : ascii_string\nint given to be set as variable_name",
            "[in] index_name : ascii_string\nint given to be set as index_name",
            "[in] position : int64\nint given to be set as position"
        ]
    },
    {
        "name": "get_index_bottom_by_position",
        "description": "Gets the nth bottom row from an index, Location in tconf is read only",
        "doc": "get_index_bottom_by_position.docx",
        "tags": [
            "book",
            "level2",
            "topofbook"
        ],
        "functionSignature": "get_index_bottom_by_position ( sys, book_name, variable_name, index_name, position ) : bool",
        "parameters": [
            "[in_out] sys : InternalBridge\nint given to be set as sys",
            "[in_out] book_name : Level2BookIndex\nint given to be set as book_name",
            "[in] variable_name : ascii_string\nint given to be set as variable_name",
            "[in] index_name : ascii_string\nint given to be set as index_name",
            "[in] position : uint64\nint given to be set as position"
        ]
    },
    {
        "name": "get_milliseconds_since_midnight",
        "description": "Gets milliseconds since midnight in uint64.",
        "doc": "get_milliseconds_since_midnight.docx",
        "tags": [
            "date-time",
            "time"
        ],
        "functionSignature": "get_milliseconds_since_midnight ( time ) : int64",
        "parameters": [
            "[in] time : time\nint given to be set as time"
        ]
    },
    {
        "name": "get_nanoseconds_since_midnight",
        "description": "Gets nanoseconds since midnight in uint64.",
        "doc": "get_nanoseconds_since_midnight.docx",
        "tags": [
            "date-time",
            "time"
        ],
        "functionSignature": "get_nanoseconds_since_midnight ( time ) : int64",
        "parameters": [
            "[in] time : time\nint given to be set as time"
        ]
    },
    {
        "name": "get_prev_exch_trading_day",
        "description": "Get previous trading day",
        "doc": "get_prev_exch_trading_day.docx",
        "tags": [
            "date-time"
        ],
        "functionSignature": "get_prev_exch_trading_day ( time_service, date, time, targetTimeZoneId, FeedConnectTimeRIC, HolidayRIC ) : variant",
        "parameters": [
            "[in_out] time_service : TimeService\nint given to be set as time_service",
            "[in] date : date\nint given to be set as date",
            "[in] time : time\nint given to be set as time",
            "[in] targetTimeZoneId : ascii_string\nint given to be set as targetTimeZoneId",
            "[in] FeedConnectTimeRIC : ascii_string\nint given to be set as FeedConnectTimeRIC",
            "[in] HolidayRIC : variant\nint given to be set as HolidayRIC"
        ]
    },
    {
        "name": "get_n_calendar_day",
        "description": "Get n-th calendar day",
        "doc": "get_n_calendar_day.docx",
        "tags": [
            "date-time"
        ],
        "functionSignature": "get_n_calendar_day ( fromDate, numDays ) : date",
        "parameters": [
            "[in] fromDate : variant\nint given to be set as fromDate",
            "[in] numDays : int64\nint given to be set as numDays"
        ]
    },
    {
        "name": "get_n_exchange_trading_day",
        "description": "Get n-th exchange trading day",
        "doc": "get_n_exchange_trading_day.docx",
        "tags": [
            "date-time"
        ],
        "functionSignature": "get_n_exchange_trading_day ( time_service, date, time, num_days, targetTimeZoneId, FeedConnectTimeRIC, HolidayRIC ) : variant",
        "parameters": [
            "[in_out] time_service : TimeService\nint given to be set as time_service",
            "[in] date : date\nint given to be set as date",
            "[in] time : time\nint given to be set as time",
            "[in] num_days : int64\nint given to be set as num_days",
            "[in] targetTimeZoneId : ascii_string\nint given to be set as targetTimeZoneId",
            "[in] FeedConnectTimeRIC : ascii_string\nint given to be set as FeedConnectTimeRIC",
            "[in] HolidayRIC : variant\nint given to be set as HolidayRIC"
        ]
    },
    {
        "name": "is_trading_day",
        "description": "Return true if the given date is an exchange trading day, false if not. Accomplished by looking across all (except excluded) feed times to see if any are open and not on holiday for any time during the trading day.",
        "doc": "is_trading_day.docx",
        "tags": [
            "date-time"
        ],
        "functionSignature": "is_trading_day ( time_service, date, targetTimeZoneId, HolidayRIC, ExcludedFeedTimes ) : variant",
        "parameters": [
            "[in_out] time_service : TimeService\nint given to be set as time_service",
            "[in] date : date\nint given to be set as date",
            "[in] targetTimeZoneId : ascii_string\nint given to be set as targetTimeZoneId",
            "[in] HolidayRIC : variant\nint given to be set as HolidayRIC",
            "[in] ExcludedFeedTimes : ascii_string\nint given to be set as ExcludedFeedTimes"
        ]
    },
    {
        "name": "get_real_base",
        "description": "Get base value from a real",
        "doc": "get_real_base.docx",
        "tags": [
            "get",
            "real"
        ],
        "functionSignature": "get_real_base ( real_value ) : int64",
        "parameters": [
            "[in] real_value : real\nint given to be set as real_value"
        ]
    },
    {
        "name": "get_real_exponent",
        "description": "Get exponent value from a real",
        "doc": "get_real_exponent.docx",
        "tags": [
            "get",
            "real"
        ],
        "functionSignature": "get_real_exponent ( real_value ) : int64",
        "parameters": [
            "[in] real_value : real\nint given to be set as real_value"
        ]
    },
    {
        "name": "get_row",
        "description": "Gets a row in level 2 object. Introduces a location for the row in tconf",
        "doc": "get_row.docx",
        "tags": [
            "book",
            "level2"
        ],
        "functionSignature": "get_row ( sys, book_name, variable_name, row_key ) : bool",
        "parameters": [
            "[in_out] sys : InternalBridge\nint given to be set as sys",
            "[in_out] book_name : Level2Book\nint given to be set as book_name",
            "[in] variable_name : ascii_string\nint given to be set as variable_name",
            "[in] row_key : ascii_string\nint given to be set as row_key"
        ]
    },
    {
        "name": "get_top_of_book",
        "description": "Retrieves the top of book, depending on the book side [ASK, BID]",
        "doc": "get_top_of_book.docx",
        "tags": [
            "transform",
            "top of book"
        ],
        "functionSignature": "get_top_of_book ( order_book, book_side, top_of_book_price, top_of_book_size, top_of_book_no_orders ) : bool",
        "parameters": [
            "[in_out] order_book : Level2Book\nint given to be set as order_book",
            "[in] book_side : variant\nint given to be set as book_side",
            "[in_out] top_of_book_price : variant\nint given to be set as top_of_book_price",
            "[in_out] top_of_book_size : variant\nint given to be set as top_of_book_size",
            "[in_out] top_of_book_no_orders : variant\nint given to be set as top_of_book_no_orders"
        ]
    },
    {
        "name": "get_type",
        "description": "Gets the type of the given input.",
        "doc": "get_type.docx",
        "tags": [
            "core",
            "debug"
        ],
        "functionSignature": "get_type ( str ) : variant",
        "parameters": [
            "[in] str : variant\nint given to be set as str"
        ]
    },
    {
        "name": "hkfe_apply_market_status",
        "description": "Apply 320 message from HKFE",
        "doc": "hkfe_apply_market_status.docx",
        "tags": [
            "hkfe",
            "market_status"
        ],
        "functionSignature": "hkfe_apply_market_status ( object_name, orderBookId, market, instrumentCode, commodityCode, level, priority, state, secondsToStart ) : variant",
        "parameters": [
            "[in_out] object_name : MarketStatus\nint given to be set as object_name",
            "[in] orderBookId : ascii_string\nint given to be set as orderBookId",
            "[in] market : ascii_string\nint given to be set as market",
            "[in] instrumentCode : ascii_string\nint given to be set as instrumentCode",
            "[in] commodityCode : ascii_string\nint given to be set as commodityCode",
            "[in] level : ascii_string\nint given to be set as level",
            "[in] priority : ascii_string\nint given to be set as priority",
            "[in] state : int64\nint given to be set as state",
            "[in] secondsToStart : ascii_string\nint given to be set as secondsToStart"
        ]
    },
    {
        "name": "hkfe_clear_market_status",
        "description": "Clear market status code",
        "doc": "hkfe_clear_market_status.docx",
        "tags": [
            "hkfe",
            "market_status"
        ],
        "functionSignature": "hkfe_clear_market_status ( object_name )",
        "parameters": [
            "[in_out] object_name : MarketStatus\nint given to be set as object_name"
        ]
    },
    {
        "name": "hkfe_get_market_status",
        "description": "Get market status code",
        "doc": "hkfe_get_market_status.docx",
        "tags": [
            "hkfe",
            "market_status"
        ],
        "functionSignature": "hkfe_get_market_status ( object_name ) : variant",
        "parameters": [
            "[in_out] object_name : MarketStatus\nint given to be set as object_name"
        ]
    },
    {
        "name": "init_parent_identifier",
        "description": "Init Parent identifier includes seriesID, market, instrumentCode, commodity",
        "doc": "init_parent_identifier.docx",
        "tags": [
            "market_state"
        ],
        "functionSignature": "init_parent_identifier ( object_name, seriesId, market, instrumentCode, commodityCode )",
        "parameters": [
            "[in_out] object_name : MarketState\nint given to be set as object_name",
            "[in] seriesId : ascii_string\nint given to be set as seriesId",
            "[in] market : ascii_string\nint given to be set as market",
            "[in] instrumentCode : ascii_string\nint given to be set as instrumentCode",
            "[in] commodityCode : ascii_string\nint given to be set as commodityCode"
        ]
    },
    {
        "name": "init_leg_identifier",
        "description": "Init Leg identifier includes seriesID, market, instrumentCode, commodity",
        "doc": "init_leg_identifier.docx",
        "tags": [
            "market_state"
        ],
        "functionSignature": "init_leg_identifier ( object_name, seriesId, market, instrumentCode, commodityCode )",
        "parameters": [
            "[in_out] object_name : MarketState\nint given to be set as object_name",
            "[in] seriesId : ascii_string\nint given to be set as seriesId",
            "[in] market : ascii_string\nint given to be set as market",
            "[in] instrumentCode : ascii_string\nint given to be set as instrumentCode",
            "[in] commodityCode : ascii_string\nint given to be set as commodityCode"
        ]
    },
    {
        "name": "add_to_state_table",
        "description": "Apply Market State",
        "doc": "add_to_state_table.docx",
        "tags": [
            "market_state"
        ],
        "functionSignature": "add_to_state_table ( object_name, seriesId, market, instrumentCode, commodityCode, level, priority, state, stateName ) : variant",
        "parameters": [
            "[in_out] object_name : MarketState\nint given to be set as object_name",
            "[in] seriesId : ascii_string\nint given to be set as seriesId",
            "[in] market : ascii_string\nint given to be set as market",
            "[in] instrumentCode : ascii_string\nint given to be set as instrumentCode",
            "[in] commodityCode : ascii_string\nint given to be set as commodityCode",
            "[in] level : ascii_string\nint given to be set as level",
            "[in_out] priority : variant\nint given to be set as priority",
            "[in_out] state : variant\nint given to be set as state",
            "[in_out] stateName : ascii_string\nint given to be set as stateName"
        ]
    },
    {
        "name": "get_active_state",
        "description": "Get Active Market State",
        "doc": "get_active_state.docx",
        "tags": [
            "market_state"
        ],
        "functionSignature": "get_active_state ( object_name, priority, state, stateName ) : variant",
        "parameters": [
            "[in_out] object_name : MarketState\nint given to be set as object_name",
            "[in_out] priority : int64\nint given to be set as priority",
            "[in_out] state : int64\nint given to be set as state",
            "[in_out] stateName : ascii_string\nint given to be set as stateName"
        ]
    },
    {
        "name": "get_active_tss",
        "description": "Get Active TSS Market State",
        "doc": "get_active_tss.docx",
        "tags": [
            "market_state"
        ],
        "functionSignature": "get_active_tss ( object_name, priority, state, stateName ) : variant",
        "parameters": [
            "[in_out] object_name : MarketState\nint given to be set as object_name",
            "[in_out] priority : int64\nint given to be set as priority",
            "[in_out] state : int64\nint given to be set as state",
            "[in_out] stateName : ascii_string\nint given to be set as stateName"
        ]
    },
    {
        "name": "get_active_iss",
        "description": "Get Active ISS Market State",
        "doc": "get_active_iss.docx",
        "tags": [
            "market_state"
        ],
        "functionSignature": "get_active_iss ( object_name, priority, state, stateName ) : variant",
        "parameters": [
            "[in_out] object_name : MarketState\nint given to be set as object_name",
            "[in_out] priority : int64\nint given to be set as priority",
            "[in_out] state : int64\nint given to be set as state",
            "[in_out] stateName : ascii_string\nint given to be set as stateName"
        ]
    },
    {
        "name": "clear_state_table",
        "description": "Clear market status code",
        "doc": "clear_state_table.docx",
        "tags": [
            "market_state"
        ],
        "functionSignature": "clear_state_table ( object_name )",
        "parameters": [
            "[in_out] object_name : MarketState\nint given to be set as object_name"
        ]
    },
    {
        "name": "Split",
        "description": "Boost::split, split with string delimiter. return split[pos] if pos is specified, else return split.size().",
        "doc": "split.docx",
        "tags": [
            "core",
            "string"
        ],
        "functionSignature": "Split ( strSrc, delimiter, pos ) : variant",
        "parameters": [
            "[in] strSrc : ascii_string\nint given to be set as strSrc",
            "[in] delimiter : ascii_string\nint given to be set as delimiter",
            "[in] pos : variant\nint given to be set as pos"
        ]
    },
    {
        "name": "ignore",
        "description": "Does nothing. Ignores the passed parameter.",
        "doc": "ignore.docx",
        "tags": [
            "built-in",
            "core",
            "ignore",
            "no-op",
            "nothing"
        ],
        "functionSignature": "ignore ( ignoreThis )",
        "parameters": [
            "[in] ignoreThis : variant\nint given to be set as ignoreThis"
        ]
    },
    {
        "name": "isAlpha",
        "description": "Checks whether the passed in value is entirely composed of alphabetic letters. For strings, all characters will be inspected. For other data types the result will always be false.",
        "doc": "isAlpha.docx",
        "tags": [
            "alpha",
            "built-in",
            "char",
            "core",
            "letter"
        ],
        "functionSignature": "isAlpha ( test_val ) : bool",
        "parameters": [
            "[in] test_val : variant\nint given to be set as test_val"
        ]
    },
    {
        "name": "isDigit",
        "description": "Checks whether the passed in value represents a number. For numerics (ints, doubles, real) the answer will always be true. For strings, result is true if the whole string parses to a number; false otherwise. For all other data types the result will always be false.",
        "doc": "isDigit.docx",
        "tags": [
            "built-in",
            "core",
            "digit",
            "number"
        ],
        "functionSignature": "isDigit ( am_i_a_number ) : bool",
        "parameters": [
            "[in] am_i_a_number : variant\nint given to be set as am_i_a_number"
        ]
    },
    {
        "name": "keep_row",
        "description": "keep a row, used for full depth update.",
        "doc": "keep_row.docx",
        "tags": [
            "book",
            "full depth",
            "level2",
            "mbp"
        ],
        "functionSignature": "keep_row ( book_name, row_key )",
        "parameters": [
            "[in_out] book_name : Level2BookDepthHelper\nint given to be set as book_name",
            "[in] row_key : ascii_string\nint given to be set as row_key"
        ]
    },
    {
        "name": "keep_user_defined_rows",
        "description": "Keep all rows in book that match the user-defined criteria",
        "doc": "keep_user_defined_rows.docx",
        "tags": [
            "book",
            "full depth",
            "level2",
            "keep"
        ],
        "functionSignature": "keep_user_defined_rows ( book_name, row_level_fid_name, user_specified_value_array )",
        "parameters": [
            "[in_out] book_name : Level2Book\nint given to be set as book_name",
            "[in] row_level_fid_name : ascii_string\nint given to be set as row_level_fid_name",
            "[in] user_specified_value_array : array\nint given to be set as user_specified_value_array"
        ]
    },
    {
        "name": "len",
        "description": "Returns the length of a given string.",
        "doc": "len.docx",
        "tags": [
            "core",
            "string"
        ],
        "functionSignature": "len ( str ) : uint64",
        "parameters": [
            "[in] str : variant\nint given to be set as str"
        ]
    },
    {
        "name": "log_critical",
        "description": "Logs a message with a 'critical' log level.",
        "doc": "log_critical.docx",
        "tags": [
            "debug",
            "log"
        ],
        "functionSignature": "log_critical ( message )",
        "parameters": [
            "[in] message : variant\nint given to be set as message"
        ]
    },
    {
        "name": "log_info",
        "description": "Logs a message with an 'info' log level.",
        "doc": "log_info.docx",
        "tags": [
            "debug",
            "log"
        ],
        "functionSignature": "log_info ( message )",
        "parameters": [
            "[in] message : variant\nint given to be set as message"
        ]
    },
    {
        "name": "log_warn",
        "description": "Logs a message with a 'warning' log level.",
        "doc": "log_warn.docx",
        "tags": [
            "debug",
            "log"
        ],
        "functionSignature": "log_warn ( message )",
        "parameters": [
            "[in] message : variant\nint given to be set as message"
        ]
    },
    {
        "name": "map",
        "description": "Looks up a value in a map",
        "doc": "map.docx",
        "tags": [
            "core",
            "map"
        ],
        "functionSignature": "map ( val, pairs ) : variant",
        "parameters": [
            "[in] val : variant\nint given to be set as val",
            "[in] pairs : map\nint given to be set as pairs"
        ]
    },
    {
        "name": "print",
        "description": "Prints given string to standard output.",
        "doc": "print.docx",
        "tags": [
            "core",
            "debug"
        ],
        "functionSignature": "print ( str )",
        "parameters": [
            "[in] str : variant\nint given to be set as str"
        ]
    },
    {
        "name": "remove_row",
        "description": "Adds removes a row from level 2 object.",
        "doc": "remove_row.docx",
        "tags": [
            "book",
            "level2"
        ],
        "functionSignature": "remove_row ( book_name, row_key ) : bool",
        "parameters": [
            "[in_out] book_name : Level2Book\nint given to be set as book_name",
            "[in] row_key : ascii_string\nint given to be set as row_key"
        ]
    },
    {
        "name": "rescale",
        "description": "Scales exponent of values encoded as real.",
        "doc": "rescale.docx",
        "tags": [
            "conversion",
            "math"
        ],
        "functionSignature": "rescale ( from, new_exponent ) : variant",
        "parameters": [
            "[in] from : real\nint given to be set as from",
            "[in] new_exponent : variant\nint given to be set as new_exponent"
        ]
    },
    {
        "name": "ripple",
        "description": "Standard (basic) ripple: moves values from field to field (no L2 or unwinding supported).",
        "doc": "ripple.docx",
        "tags": [
            "ripple",
            "utility"
        ],
        "functionSignature": "ripple ( from, ripple_set )",
        "parameters": [
            "[in] from : variant\nint given to be set as from",
            "[in_out] ripple_set : array\nint given to be set as ripple_set"
        ]
    },
    {
        "name": "strtime",
        "description": "--DEPRECATED-- Use 'to_time' instead. Convert string to time",
        "doc": "strtime.docx",
        "tags": [
            "conversion",
            "core",
            "date-time",
            "string"
        ],
        "functionSignature": "strtime ( fid ) : time",
        "parameters": [
            "[in] fid : variant\nint given to be set as fid"
        ]
    },
    {
        "name": "str2date",
        "description": "--DEPRECATED-- Use 'to_date' instead. Convert string to date",
        "doc": "str2date.docx",
        "tags": [
            "conversion",
            "core",
            "date",
            "string"
        ],
        "functionSignature": "str2date ( value, format ) : date",
        "parameters": [
            "[in] value : variant\nint given to be set as value",
            "[in] format : variant\nint given to be set as format"
        ]
    },
    {
        "name": "str2int",
        "description": "--DEPRECATED-- Use 'to_int' instead. Convert a string to an integer",
        "doc": "str2int.docx",
        "tags": [
            "conversion",
            "core",
            "integer",
            "string"
        ],
        "functionSignature": "str2int ( value ) : int64",
        "parameters": [
            "[in] value : variant\nint given to be set as value"
        ]
    },
    {
        "name": "str2uint",
        "description": "--DEPRECATED-- Use 'to_uint' instead. Convert a string to an unsigned integer",
        "doc": "str2uint.docx",
        "tags": [
            "conversion",
            "core",
            "integer",
            "string"
        ],
        "functionSignature": "str2uint ( value ) : uint64",
        "parameters": [
            "[in] value : variant\nint given to be set as value"
        ]
    },
    {
        "name": "substr",
        "description": "Returns substring-ed input",
        "doc": "substr.docx",
        "tags": [
            "core",
            "string"
        ],
        "functionSignature": "substr ( str, pos, len ) : variant",
        "parameters": [
            "[in] str : variant\nint given to be set as str",
            "[in] pos : variant\nint given to be set as pos",
            "[in] len : variant\nint given to be set as len"
        ]
    },
    {
        "name": "time_from_micros_since_midnight",
        "description": "Creates a time variant from microseconds since midnight",
        "doc": "time_from_micros_since_midnight.docx",
        "tags": [
            "date-time",
            "time"
        ],
        "functionSignature": "time_from_micros_since_midnight ( microseconds_since_midnight ) : time",
        "parameters": [
            "[in] microseconds_since_midnight : int64\nint given to be set as microseconds_since_midnight"
        ]
    },
    {
        "name": "time_from_millis_since_midnight",
        "description": "Creates a time variant from milliseconds since midnight",
        "doc": "time_from_millis_since_midnight.docx",
        "tags": [
            "date-time",
            "time"
        ],
        "functionSignature": "time_from_millis_since_midnight ( milliseconds_since_midnight ) : time",
        "parameters": [
            "[in] milliseconds_since_midnight : int64\nint given to be set as milliseconds_since_midnight"
        ]
    },
    {
        "name": "time_from_nanos_since_midnight",
        "description": "Creates a time variant from nanoseconds since midnight",
        "doc": "time_from_nanos_since_midnight.docx",
        "tags": [
            "date-time",
            "time"
        ],
        "functionSignature": "time_from_nanos_since_midnight ( nanoseconds_since_midnight ) : time",
        "parameters": [
            "[in] nanoseconds_since_midnight : int64\nint given to be set as nanoseconds_since_midnight"
        ]
    },
    {
        "name": "time_from_seconds_since_midnight",
        "description": "Creates a time variant from seconds since midnight",
        "doc": "time_from_seconds_since_midnight.docx",
        "tags": [
            "date-time",
            "time"
        ],
        "functionSignature": "time_from_seconds_since_midnight ( seconds_since_midnight ) : time",
        "parameters": [
            "[in] seconds_since_midnight : int64\nint given to be set as seconds_since_midnight"
        ]
    },
    {
        "name": "to_string",
        "description": "Supports more conversion of data types to string",
        "doc": "to_string.docx",
        "tags": [
            "format",
            "string"
        ],
        "functionSignature": "to_string ( value ) : variant",
        "parameters": [
            "[in] value : variant\nint given to be set as value"
        ]
    },
    {
        "name": "to_double",
        "description": "Supports conversion of various data types to double",
        "doc": "to_double.docx",
        "tags": [
            "string",
            "double"
        ],
        "functionSignature": "to_double ( value ) : double",
        "parameters": [
            "[in] value : variant\nint given to be set as value"
        ]
    },
    {
        "name": "to_real",
        "description": "Supports conversion of various data types to real",
        "doc": "to_real.docx",
        "tags": [
            "string",
            "real"
        ],
        "functionSignature": "to_real ( value ) : real",
        "parameters": [
            "[in] value : variant\nint given to be set as value"
        ]
    },
    {
        "name": "to_int",
        "description": "Supports conversion of various data types to int",
        "doc": "to_int.docx",
        "tags": [
            "string",
            "int"
        ],
        "functionSignature": "to_int ( value ) : int64",
        "parameters": [
            "[in] value : variant\nint given to be set as value"
        ]
    },
    {
        "name": "to_uint",
        "description": "Supports conversion of various data types to uint",
        "doc": "to_uint.docx",
        "tags": [
            "string",
            "uint"
        ],
        "functionSignature": "to_uint ( value ) : uint64",
        "parameters": [
            "[in] value : variant\nint given to be set as value"
        ]
    },
    {
        "name": "to_date",
        "description": "Supports conversion of various data types to a date",
        "doc": "to_date.docx",
        "tags": [
            "string",
            "date",
            "datetime"
        ],
        "functionSignature": "to_date ( date, format ) : date",
        "parameters": [
            "[in] date : variant\nint given to be set as date",
            "[in] format : variant\nint given to be set as format"
        ]
    },
    {
        "name": "to_time",
        "description": "Convert string to time",
        "doc": "to_time.docx",
        "tags": [
            "time",
            "datetime",
            "string"
        ],
        "functionSignature": "to_time ( fid ) : time",
        "parameters": [
            "[in] fid : variant\nint given to be set as fid"
        ]
    },
    {
        "name": "to_datetime",
        "description": "Convert string to datetime",
        "doc": "to_datetime.docx",
        "tags": [
            "time",
            "datetime",
            "string"
        ],
        "functionSignature": "to_datetime ( datetime ) : date_time",
        "parameters": [
            "[in] datetime : variant\nint given to be set as datetime"
        ]
    },
    {
        "name": "trim",
        "description": "Removes whitespace from beginning and end of a given string.",
        "doc": "trim.docx",
        "tags": [
            "core",
            "string"
        ],
        "functionSignature": "trim ( str ) : variant",
        "parameters": [
            "[in] str : variant\nint given to be set as str"
        ]
    },
    {
        "name": "date_diff_days",
        "description": "Get days difference (no holiday consideration) from a date or datetime [date1-date2]. If the FID content is #BLANK, it means 1970-1-1",
        "doc": "date_diff_days.docx",
        "tags": [
            "date",
            "date-time",
            "diff"
        ],
        "functionSignature": "date_diff_days ( date_value1, date_value2 ) : int64",
        "parameters": [
            "[in] date_value1 : variant\nint given to be set as date_value1",
            "[in] date_value2 : variant\nint given to be set as date_value2"
        ]
    },
    {
        "name": "convert_from_gmt",
        "description": "Converts GMT date-time, date or time to a local using a given timezone. The return type is based on the parameter OptionsToConvert (value: 3,2,1).",
        "doc": "convert_from_gmt.docx",
        "tags": [
            "conversion",
            "date-time",
            "date",
            "time"
        ],
        "functionSignature": "convert_from_gmt ( time_service, date, time, targetTimeZoneId, options ) : variant",
        "parameters": [
            "[in_out] time_service : TimeService\nint given to be set as time_service",
            "[in] date : date\nint given to be set as date",
            "[in] time : time\nint given to be set as time",
            "[in] targetTimeZoneId : ascii_string\nint given to be set as targetTimeZoneId",
            "[in] options : uint64\nint given to be set as options"
        ]
    },
    {
        "name": "convert_to_gmt",
        "description": "Converts local date-time, date or time to GMT into a given timezone. The return type is based on the parameter OptionsToConvert (value: 3,2,1).",
        "doc": "convert_to_gmt.docx",
        "tags": [
            "conversion",
            "date-time",
            "date",
            "time"
        ],
        "functionSignature": "convert_to_gmt ( time_service, date, time, targetTimeZoneId, options ) : variant",
        "parameters": [
            "[in_out] time_service : TimeService\nint given to be set as time_service",
            "[in] date : date\nint given to be set as date",
            "[in] time : time\nint given to be set as time",
            "[in] targetTimeZoneId : ascii_string\nint given to be set as targetTimeZoneId",
            "[in] options : uint64\nint given to be set as options"
        ]
    },
    {
        "name": "publication_has_summary",
        "description": "tell whether there is any summary FID being changed in the publication object",
        "doc": "publication_has_summary.docx",
        "tags": [
            "summary fid",
            "publication",
            "bridge"
        ],
        "functionSignature": "publication_has_summary ( sys ) : bool",
        "parameters": [
            "[in] sys : InternalBridge\nint given to be set as sys"
        ]
    },
    {
        "name": "publication_has_row",
        "description": "tell whether there is any rows created the publication object",
        "doc": "publication_has_row.docx",
        "tags": [
            "rows",
            "publication",
            "bridge"
        ],
        "functionSignature": "publication_has_row ( sys ) : bool",
        "parameters": [
            "[in] sys : InternalBridge\nint given to be set as sys"
        ]
    },
    {
        "name": "replace_text",
        "description": "Replaces all instances of text within a string with another string.",
        "doc": "replace_text.docx",
        "tags": [
            "conversion",
            "core",
            "remove",
            "string",
            "replace"
        ],
        "functionSignature": "replace_text ( source, text_to_replace, replacement_text )",
        "parameters": [
            "[in_out] source : ascii_string\nint given to be set as source",
            "[in] text_to_replace : ascii_string\nint given to be set as text_to_replace",
            "[in] replacement_text : ascii_string\nint given to be set as replacement_text"
        ]
    },
    {
        "name": "partial_update",
        "description": "Update string type FIDs based on partial update logic. If the commands are implemented to base string, 0 will be returned. Otherwise error code will be returned.",
        "doc": "partial_update.docx",
        "tags": [
            "conversion",
            "core",
            "string",
            "replace"
        ],
        "functionSignature": "partial_update ( errorCode, commands, base_value, ranges, option, result ) : variant",
        "parameters": [
            "[out] errorCode : int64\nint given to be set as errorCode",
            "[in_out] commands : ascii_string\nint given to be set as commands",
            "[in] base_value : variant\nint given to be set as base_value",
            "[in] ranges : ascii_string\nint given to be set as ranges",
            "[in] option : ascii_string\nint given to be set as option",
            "[out] result : ascii_string\nint given to be set as result"
        ]
    },
    {
        "name": "generate_partial_update",
        "description": "Apply the updateString and Return partial update for publication, return #BLANK if no partial update detect.",
        "doc": "generate_partial_update.docx",
        "tags": [
            "conversion",
            "core",
            "string",
            "replace"
        ],
        "functionSignature": "generate_partial_update ( original_string, pos, update_substring, mask ) : variant",
        "parameters": [
            "[in_out] original_string : ascii_string\nint given to be set as original_string",
            "[in] pos : uint64\nint given to be set as pos",
            "[in] update_substring : ascii_string\nint given to be set as update_substring",
            "[in] mask : ascii_string\nint given to be set as mask"
        ]
    },
    {
        "name": "apply_permission_information_to_publication",
        "description": "Apply internal TR permission information to the current publication, permission information will replace the Permission Entity in the published header with the permission data provided.",
        "doc": "apply_permission_information_to_publication.docx",
        "tags": [],
        "functionSignature": "apply_permission_information_to_publication ( sys, permission_info )",
        "parameters": [
            "[in_out] sys : InternalBridge\nint given to be set as sys",
            "[in] permission_info : ascii_string\nint given to be set as permission_info"
        ]
    },
    {
        "name": "apply_permission_information_to_vehicle",
        "description": "Apply internal TR permission information to the current vehicle, permission information will replace the Permission Entity of the vehicle when publishing.",
        "doc": "apply_permission_information_to_vehicle.docx",
        "tags": [],
        "functionSignature": "apply_permission_information_to_vehicle ( sys, permission_info )",
        "parameters": [
            "[in_out] sys : InternalBridge\nint given to be set as sys",
            "[in] permission_info : ascii_string\nint given to be set as permission_info"
        ]
    },
    {
        "name": "get_order_input_location",
        "description": "Retrieves a location for order input.",
        "doc": "get_order_input_location.docx",
        "tags": [],
        "functionSignature": "get_order_input_location ( sys, book, variable_name ) : bool",
        "parameters": [
            "[in_out] sys : InternalBridge\nint given to be set as sys",
            "[in_out] book : ObservableBook\nint given to be set as book",
            "[in] variable_name : ascii_string\nint given to be set as variable_name"
        ]
    },
    {
        "name": "add_order",
        "description": "Adds an order to the book object and publishes the resulting action.",
        "doc": "add_order.docx",
        "tags": [],
        "functionSignature": "add_order ( sys, book, publisher ) : bool",
        "parameters": [
            "[in_out] sys : InternalBridge\nint given to be set as sys",
            "[in_out] book : ObservableBook\nint given to be set as book",
            "[in_out] publisher : Publisher\nint given to be set as publisher"
        ]
    },
    {
        "name": "modify_order",
        "description": "Modifies an order on the book object and publishes the resulting action(s).",
        "doc": "modify_order.docx",
        "tags": [],
        "functionSignature": "modify_order ( sys, book, publisher ) : bool",
        "parameters": [
            "[in_out] sys : InternalBridge\nint given to be set as sys",
            "[in_out] book : ObservableBook\nint given to be set as book",
            "[in_out] publisher : Publisher\nint given to be set as publisher"
        ]
    },
    {
        "name": "delete_order",
        "description": "Deletes an order from the book object and publishes the resulting action.",
        "doc": "delete_order.docx",
        "tags": [],
        "functionSignature": "delete_order ( sys, book, publisher ) : bool",
        "parameters": [
            "[in_out] sys : InternalBridge\nint given to be set as sys",
            "[in_out] book : ObservableBook\nint given to be set as book",
            "[in_out] publisher : Publisher\nint given to be set as publisher"
        ]
    },
    {
        "name": "delete_user_defined_orders",
        "description": "Deletes all orders from the book object that matches the specified criteria and publishes the resulting action.",
        "doc": "delete_user_defined_orders.docx",
        "tags": [],
        "functionSignature": "delete_user_defined_orders ( sys, book, publisher, row_level_fid_name, user_specified_value_array, date, time ) : uint64",
        "parameters": [
            "[in_out] sys : InternalBridge\nint given to be set as sys",
            "[in_out] book : ObservableBook\nint given to be set as book",
            "[in_out] publisher : Publisher\nint given to be set as publisher",
            "[in] row_level_fid_name : ascii_string\nint given to be set as row_level_fid_name",
            "[in] user_specified_value_array : array\nint given to be set as user_specified_value_array",
            "[in] date : variant\nint given to be set as date",
            "[in] time : variant\nint given to be set as time"
        ]
    },
    {
        "name": "delete_all_orders_on_side",
        "description": "Deletes all orders from the specified side of the book object and publishes the resulting actions.",
        "doc": "delete_all_orders_on_side.docx",
        "tags": [],
        "functionSignature": "delete_all_orders_on_side ( sys, book, publisher, side, date, time ) : uint64",
        "parameters": [
            "[in_out] sys : InternalBridge\nint given to be set as sys",
            "[in_out] book : ObservableBook\nint given to be set as book",
            "[in_out] publisher : Publisher\nint given to be set as publisher",
            "[in] side : uint64\nint given to be set as side",
            "[in] date : variant\nint given to be set as date",
            "[in] time : variant\nint given to be set as time"
        ]
    },
    {
        "name": "delete_orders_through_rank",
        "description": "Deletes all orders from the top of the specified the book object through (and including) the specified rank on the specified side and publishes the resulting actions.",
        "doc": "delete_orders_through_rank.docx",
        "tags": [],
        "functionSignature": "delete_orders_through_rank ( sys, book, publisher, side, rank, date, time ) : uint64",
        "parameters": [
            "[in_out] sys : InternalBridge\nint given to be set as sys",
            "[in_out] book : ObservableBook\nint given to be set as book",
            "[in_out] publisher : Publisher\nint given to be set as publisher",
            "[in] side : uint64\nint given to be set as side",
            "[in] rank : uint64\nint given to be set as rank",
            "[in] date : variant\nint given to be set as date",
            "[in] time : variant\nint given to be set as time"
        ]
    },
    {
        "name": "delete_orders_from_rank",
        "description": "Deletes all orders from (and including) the specified rank through the end of the book object on the specified side and publishes the resulting actions.",
        "doc": "delete_orders_from_rank.docx",
        "tags": [],
        "functionSignature": "delete_orders_from_rank ( sys, book, publisher, side, rank, date, time ) : uint64",
        "parameters": [
            "[in_out] sys : InternalBridge\nint given to be set as sys",
            "[in_out] book : ObservableBook\nint given to be set as book",
            "[in_out] publisher : Publisher\nint given to be set as publisher",
            "[in] side : uint64\nint given to be set as side",
            "[in] rank : uint64\nint given to be set as rank",
            "[in] date : variant\nint given to be set as date",
            "[in] time : variant\nint given to be set as time"
        ]
    }
];
//# sourceMappingURL=doc.js.map