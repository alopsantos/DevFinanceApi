import { request, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';


import Transaction from '../models/Transaction';
import transactionView from '../views/transactions_view';


export default {
  async index(request: Request, response: Response){
    const transactionsRepository = getRepository(Transaction);

    const transactions = await transactionsRepository.find();

    return response.status(201).json(transactions);
  },

  async show(request: Request, response: Response){
    const { id } = request.params;

    const transactionsRepository = getRepository(Transaction);

    const transactions = await transactionsRepository.findOneOrFail(id);

    return response.status(201).json(transactionView.render(transactions));
  },

  async create(request: Request, response: Response) {
    const { description, value, date } = request.body;

    const transactionsRepository = getRepository(Transaction);

    const transaction = transactionsRepository.create({
      description,
      value,
      date,
    });
    
    const schema = Yup.object().shape({
      description: Yup.string().required('Descrição da transação é obrigatório doido!'),
      value: Yup.number().required('Valor da transação é obrigatório doido!'),
      date: Yup.date().required('Data de vencimento da transação é obrigatório doido!')
    });

    await schema.validate(transaction, {
      abortEarly: false,
    });


    await transactionsRepository.save(transaction);

    return response.status(201).json(transaction);
  },
};
