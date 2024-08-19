package com.mycompany.myapp.domain;

import static com.mycompany.myapp.domain.BranchTestSamples.*;
import static com.mycompany.myapp.domain.CustomerTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.mycompany.myapp.web.rest.TestUtil;
import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

class BranchTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Branch.class);
        Branch branch1 = getBranchSample1();
        Branch branch2 = new Branch();
        assertThat(branch1).isNotEqualTo(branch2);

        branch2.setId(branch1.getId());
        assertThat(branch1).isEqualTo(branch2);

        branch2 = getBranchSample2();
        assertThat(branch1).isNotEqualTo(branch2);
    }

    @Test
    void customersTest() {
        Branch branch = getBranchRandomSampleGenerator();
        Customer customerBack = getCustomerRandomSampleGenerator();

        branch.addCustomers(customerBack);
        assertThat(branch.getCustomers()).containsOnly(customerBack);
        assertThat(customerBack.getAssociatedBranch()).isEqualTo(branch);

        branch.removeCustomers(customerBack);
        assertThat(branch.getCustomers()).doesNotContain(customerBack);
        assertThat(customerBack.getAssociatedBranch()).isNull();

        branch.customers(new HashSet<>(Set.of(customerBack)));
        assertThat(branch.getCustomers()).containsOnly(customerBack);
        assertThat(customerBack.getAssociatedBranch()).isEqualTo(branch);

        branch.setCustomers(new HashSet<>());
        assertThat(branch.getCustomers()).doesNotContain(customerBack);
        assertThat(customerBack.getAssociatedBranch()).isNull();
    }
}
