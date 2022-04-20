import Mcp from './mcp'

import { contractABI, contractAddress } from '../lib/constants'

const McpFunc = new Mcp()

McpFunc.Contract.setProvider('http://18.182.45.18:8765')

const coreAddress = contractAddress

const Instance = new McpFunc.Contract(contractABI, contractAddress)

const Contract = {
  contractAddress,
  Instance,
  coreAddress,
}

export default Contract
