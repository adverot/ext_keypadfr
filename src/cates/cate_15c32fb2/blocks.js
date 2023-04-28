const blocks = (extFacePanels) => ([{
        "opcode": "BLOCK_1682531530376",
        "blockType": "command",
        "checkboxInFlyout": false,
        "gap": 12,
        "arguments": {
            "row1": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "BLOCK_1682531530376_ROW1"
            },
            "row2": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "BLOCK_1682531530376_ROW1"
            },
            "row3": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "BLOCK_1682531530376_ROW1"
            },
            "row4": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "BLOCK_1682531530376_ROW1"
            },
            "col1": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "BLOCK_1682531530376_ROW1"
            },
            "col2": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "BLOCK_1682531530376_ROW1"
            },
            "col3": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "BLOCK_1682531530376_ROW1"
            },
            "col4": {
                "type": "fieldMenu",
                "defaultValue": "0",
                "menu": "BLOCK_1682531530376_ROW1"
            }
        },
        "branchCount": 0,
        "codes": {
            "arduinoc": {
                "sections": {
                    "include": [
                        "\"Keypad-3.1.1/src/Key.h\"",
                        "\"Keypad-3.1.1/src/Keypad.h\""
                    ]
                }
            }
        },
        "handler": this.funcs.BLOCK_1682531530376
    },
    {
        "opcode": "BLOCK_1682531926651",
        "blockType": "command",
        "checkboxInFlyout": false,
        "gap": 12,
        "arguments": {
            "toRead": {
                "type": "number",
                "defaultValue": 1
            }
        },
        "branchCount": 0,
        "handler": this.funcs.BLOCK_1682531926651
    },
    {
        "opcode": "BLOCK_1682531968675",
        "blockType": "string",
        "checkboxInFlyout": false,
        "gap": 12,
        "arguments": {},
        "branchCount": 0,
        "handler": this.funcs.BLOCK_1682531968675
    }
]);

export default blocks;