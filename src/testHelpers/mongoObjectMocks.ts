export const mongoBlockState = {
  _id: '5c0fb69b44fa132243b005d9',
  block_id: '0001796719f9556dca4dce19f7d83e3c390d76783193d59123706b7741686bac',
  block_header_state:
    {
      id: '0001796719f9556dca4dce19f7d83e3c390d76783193d59123706b7741686bac',
      block_num: 3,
      header:
        {
          timestamp: "2018-08-13T22:59:46.000",
          producer: 'eosio',
          confirmed: 0,
          previous: "0001796619c493e432bcf8105d45d1c7457b58f636c89bae3f1bda6574ff7502",
          transaction_mroot: "ae806e8b9f4c0740ae77377cca3b187460c3ded54d882accb1c0e90cbfc8d49e",
          action_mroot: 'dcc6460769bfcb68ae78891db2fce7054904425c6d97b8c2794fec34ef1fbd3d',
          schedule_version: 0,
          header_extensions: [],
          producer_signature:
            "SIG_K1_JuWWv2dyszpR2skBHh6rRk37Ces5WPLCaj7vB2tqe5QqWcBuHEwKjttYApYJ27pWwFTp8SQNLS4RogLaGDHX6dCvvHoM8a",
        },
      dpos_proposed_irreversible_blocknum: 3,
      dpos_irreversible_blocknum: 2,
      bft_irreversible_blocknum: 0,
      pending_schedule_lib_num: 0,
      pending_schedule_hash: '828135c21a947b15cdbf4941ba09e1c9e0a80e88a157b0989e9b476b71a21c6b',
      pending_schedule: {version: 0, producers: []},
      active_schedule: {version: 0, producers: []},
      blockroot_merkle: {_active_nodes: [], _node_count: 2},
      producer_to_last_produced: [[]],
      producer_to_last_implied_irb: [[]],
      block_signing_key: 'EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV',
      confirm_count: [],
      confirmations: []
    },
  block_num: 96615,
  createdAt: '2018-12-11T13:07:39.145Z',
  in_current_chain: true,
  validated: false
}

export const mongoRawActions = [
  {
    _id: '5c0fb6d93ffbf3000d484e23',
    receipt: {},
    act:
      {
        account: "eosio.token",
        name: "transfer",
        authorization: [{ actor: "bill", permission: "active" }],
        data: { from: "bill", to: "bob", quantity: "1.0000 EOS", memo: "m" },
      },
    elapsed: 6,
    console: '',
    trx_id: '051620080b3212292f56a836c6b2f294291f6e6793dc0f12ce6a886f83d97f83',
    block_num: 3,
    block_time: "2018-06-09T11:56:30.000",
    producer_block_id: "0001796719f9556dca4dce19f7d83e3c390d76783193d59123706b7741686bac",
    account_ram_deltas: [],
    except: null,
    trx_status: "executed",
    createdAt: '2018-12-11T13:08:41.509Z'
  },
  {
    _id: '5c0fb6d93ffbf3000d484e24',
    receipt: {},
    act:
      {
        account: "eosio.token",
        name: "transfer",
        authorization: [{ actor: "bill", permission: "active" }],
        data: { from: "bill", to: "bob", quantity: "1.0000 EOS", memo: "m" },
      },
    elapsed: 6,
    console: '',
    trx_id: '051620080b3212292f56a836c6b2f294291f6e6793dc0f12ce6a886f83d97f83',
    block_num: 3,
    block_time: "2018-06-09T11:56:30.000",
    producer_block_id: "0001796719f9556dca4dce19f7d83e3c390d76783193d59123706b7741686bac",
    account_ram_deltas: [],
    except: null,
    trx_status: "executed",
    createdAt: '2018-12-11T13:08:41.509Z'
  }
]
