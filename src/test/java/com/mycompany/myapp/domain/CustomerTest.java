package com.mycompany.myapp.domain;

import static com.mycompany.myapp.domain.BankAccountTestSamples.*;
import static com.mycompany.myapp.domain.BranchTestSamples.*;
import static com.mycompany.myapp.domain.CustomerTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.mycompany.myapp.web.rest.TestUtil;
import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

class CustomerTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Customer.class);
        Customer customer1 = getCustomerSample1();
        Customer customer2 = new Customer();
        assertThat(customer1).isNotEqualTo(customer2);

        customer2.setId(customer1.getId());
        assertThat(customer1).isEqualTo(customer2);

        customer2 = getCustomerSample2();
        assertThat(customer1).isNotEqualTo(customer2);
    }

    @Test
    void bankAccountsTest() {
        Customer customer = getCustomerRandomSampleGenerator();
        BankAccount bankAccountBack = getBankAccountRandomSampleGenerator();

        customer.addBankAccounts(bankAccountBack);
        assertThat(customer.getBankAccounts()).containsOnly(bankAccountBack);
        assertThat(bankAccountBack.getCustomer()).isEqualTo(customer);

        customer.removeBankAccounts(bankAccountBack);
        assertThat(customer.getBankAccounts()).doesNotContain(bankAccountBack);
        assertThat(bankAccountBack.getCustomer()).isNull();

        customer.bankAccounts(new HashSet<>(Set.of(bankAccountBack)));
        assertThat(customer.getBankAccounts()).containsOnly(bankAccountBack);
        assertThat(bankAccountBack.getCustomer()).isEqualTo(customer);

        customer.setBankAccounts(new HashSet<>());
        assertThat(customer.getBankAccounts()).doesNotContain(bankAccountBack);
        assertThat(bankAccountBack.getCustomer()).isNull();
    }

    @Test
    void homeBranchTest() {
        Customer customer = getCustomerRandomSampleGenerator();
        Branch branchBack = getBranchRandomSampleGenerator();

        customer.setHomeBranch(branchBack);
        assertThat(customer.getHomeBranch()).isEqualTo(branchBack);

        customer.homeBranch(null);
        assertThat(customer.getHomeBranch()).isNull();
    }

    @Test
    void associatedBranchTest() {
        Customer customer = getCustomerRandomSampleGenerator();
        Branch branchBack = getBranchRandomSampleGenerator();

        customer.setAssociatedBranch(branchBack);
        assertThat(customer.getAssociatedBranch()).isEqualTo(branchBack);

        customer.associatedBranch(null);
        assertThat(customer.getAssociatedBranch()).isNull();
    }
}
