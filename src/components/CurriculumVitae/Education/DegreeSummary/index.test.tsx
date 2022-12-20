import { render, screen } from "@testing-library/react";
import DegreeSummary, {
  Certificate,
  certificateTestId,
  certificateVerificationLinkTestId,
  gradesTestId,
} from "components/CurriculumVitae/Education/DegreeSummary";

describe("DegreeSummary", () => {
  const mockDegreeSummaryMinimal = {
    testId: "degree-summary",
    university: "university",
    degreeName: "degreeName",
    date: "date",
  };

  const mockDegreeSummaryFull = {
    ...mockDegreeSummaryMinimal,
    grades: "grades",
    certificate: {
      label: "label",
      certificateLink: ".",
    },
  };

  it("does not render children that are absent in props", () => {
    render(<DegreeSummary {...mockDegreeSummaryMinimal} />);

    expect(screen.queryByTestId(gradesTestId)).not.toBeInTheDocument();
    expect(screen.queryByTestId(certificateTestId)).not.toBeInTheDocument();
  });

  it("renders children that are present in props", () => {
    render(<DegreeSummary {...mockDegreeSummaryFull} />);

    expect(screen.getByTestId(gradesTestId)).toBeInTheDocument();
    expect(screen.getByTestId(certificateTestId)).toBeInTheDocument();
  });

  describe("Certificate", () => {
    const mockCertificateMinimal = {
      label: "label",
      certificateLink: ".",
    };

    const mockCertificateFull = {
      ...mockCertificateMinimal,
      verify: "verify",
      verificationLink: ".",
    };

    it.each([
      { verify: undefined, verificationLink: undefined },
      { verify: undefined, verificationLink: "." },
      { verify: "verify", verificationLink: undefined },
    ])(
      "does not render children that are absent in props",
      ({ verify, verificationLink }) => {
        const mockCertificate = {
          ...mockCertificateMinimal,
          verify,
          verificationLink,
        };

        render(<Certificate {...mockCertificateMinimal} />);

        expect(
          screen.queryByTestId(certificateVerificationLinkTestId)
        ).not.toBeInTheDocument();
      }
    );

    it("renders children that are present in props", () => {
      render(<Certificate {...mockCertificateFull} />);

      expect(
        screen.getByTestId(certificateVerificationLinkTestId)
      ).toBeInTheDocument();
    });
  });
});
