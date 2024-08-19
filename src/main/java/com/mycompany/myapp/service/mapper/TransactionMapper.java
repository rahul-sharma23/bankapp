package com.mycompany.myapp.service.mapper;

import com.mycompany.myapp.domain.BankAccount;
import com.mycompany.myapp.domain.Transaction;
import com.mycompany.myapp.service.dto.BankAccountDTO;
import com.mycompany.myapp.service.dto.TransactionDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Transaction} and its DTO {@link TransactionDTO}.
 */
@Mapper(componentModel = "spring")
public interface TransactionMapper extends EntityMapper<TransactionDTO, Transaction> {
    @Mapping(target = "relatedBankAccount", source = "relatedBankAccount", qualifiedByName = "bankAccountAccountNumber")
    @Mapping(target = "bankAccount", source = "bankAccount", qualifiedByName = "bankAccountId")
    TransactionDTO toDto(Transaction s);

    @Named("bankAccountAccountNumber")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    @Mapping(target = "accountNumber", source = "accountNumber")
    BankAccountDTO toDtoBankAccountAccountNumber(BankAccount bankAccount);

    @Named("bankAccountId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    BankAccountDTO toDtoBankAccountId(BankAccount bankAccount);
}
