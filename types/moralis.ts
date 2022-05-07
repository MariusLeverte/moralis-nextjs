export type Chain = "eth" | "bsc";

export type Token = {
  balance: string;
  token_address: string;
  name: string;
  symbol: string;
  logo?: string;
  thumbnail?: string;
  decimals: string;
};

export type TokenBalances = Token[];

export type Transation = {
  hash: string;
  nonce: string;
  transaction_index: string;
  from_address: string;
  to_address: string;
  value: string;
  gas: string;
  gas_price: string;
  input: string;
  receipt_cumulative_gas_used: string;
  receipt_gas_used: string;
  receipt_contract_address: string;
  receipt_root: string;
  receipt_status: string;
  block_timestamp: string;
  block_number: string;
  block_hash: string;
};

export type Transactions = {
  total?: number | undefined;
  page?: number | undefined;
  page_size?: number | undefined;
  result?: Transation[] | undefined;
};
