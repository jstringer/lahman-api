import { JsonController, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';
import { ObjectLiteral } from '../../database/QueryOptions';
import { BattingService } from '../services/BattingService';

@JsonController()
export class BattingController {
  constructor(
    private readonly battingService: BattingService = new BattingService()
  ) {}

  
}