import { jsPDF } from 'jspdf';
import { format } from 'date-fns';

// Y Position
const SEPARATOR = 6;
const HEADING = 10;
const SUB_HEADING = 10;
const DETAIL = 8;
const SMALL_SEPARATOR = 4;

const CVFactory = () => {
  const doc = new jsPDF();

  // initial position
  let curX = 10;
  let curY = 4;

  const addY = (y) => {
    curY += y;
  };

  return {
    addPersonalInfo: (personalInfo) => {
      // Heading
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(20);
      addY(HEADING);
      doc.text('Personal Info', curX, curY);

      // separator
      addY(SEPARATOR);
      doc.line(curX, curY, 160, curY, 'F');

      // subHeading
      doc.setFontSize(16);
      addY(SUB_HEADING);
      if (personalInfo.firstName.length + personalInfo.lastName.length > 60) {
        doc.text(personalInfo.firstName, curX, curY);
        addY(SUB_HEADING);
        doc.text(personalInfo.lastName, curX, curY);
      } else {
        doc.text(
          `${personalInfo.firstName} ${personalInfo.lastName}`,
          curX,
          curY
        );
      }

      // details
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(14);
      addY(DETAIL);
      doc.text(personalInfo.email, curX, curY);
      addY(DETAIL);
      doc.text(personalInfo.phoneNumber, curX, curY);

      // small separator
      addY(SMALL_SEPARATOR);
      doc.line(curX, curY, 100, curY, 'F');
    },
    addEducations: (educations) => {
      // Heading
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(20);
      addY(HEADING);
      doc.text('Education and training', curX, curY);

      // separator
      addY(SEPARATOR);
      doc.line(curX, curY, 160, curY, 'F');

      educations.forEach((edu) => {
        // subHeading
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(16);
        addY(SUB_HEADING);
        doc.text(edu.qualificationTitle, curX, curY);

        //details
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(14);
        addY(DETAIL);
        doc.text(edu.organization, curX, curY);
        doc.setFontSize(12);
        addY(DETAIL);
        doc.text(
          `${format(edu.fromDate, 'dd/MM/yyyy')} - ${
            edu.isOngoing ? 'Current' : format(edu.toDate, 'dd/MM/yyyy')
          }`,
          curX,
          curY
        );

        // small separator
        addY(SMALL_SEPARATOR);
        doc.line(curX, curY, 100, curY, 'F');
      });
    },
    addWorkExperiences: (workExperiences) => {
      // Heading
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(20);
      addY(HEADING);
      doc.text('Work Experience', curX, curY);

      // separator
      addY(SEPARATOR);
      doc.line(curX, curY, 160, curY, 'F');

      workExperiences.forEach((work) => {
        // subHeading
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(16);
        addY(SUB_HEADING);
        doc.text(work.occupationTitle, curX, curY);

        //details
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(14);
        addY(DETAIL);
        doc.text(work.employer, curX, curY);
        doc.setFontSize(12);
        addY(DETAIL);
        doc.text(
          `${format(work.fromDate, 'dd/MM/yyyy')} - ${
            work.isOngoing ? 'Current' : format(work.toDate, 'dd/MM/yyyy')
          }`,
          curX,
          curY
        );

        const lines = work.responsibilities.trim().split('\n'); // trying not to shit too much!
        lines.forEach((line) => {
          if (line.length > 90) {
            let l = line;
            const subLines = [];

            while (l.length > 90) {
              subLines.push(`${l.substring(0, 90)}`);
              l = l.substring(90);
            }
            subLines.push(l.trim());

            subLines.forEach((l) => {
              addY(DETAIL);
              doc.text(l, curX, curY);
            });
          } else {
            if (line) {
              addY(DETAIL);
              doc.text(line, curX, curY);
            }
          }
        });

        // small separator
        addY(SMALL_SEPARATOR);
        doc.line(curX, curY, 100, curY, 'F');
      });
    },
    saveFile: (title) => {
      doc.save(title);
    }
  };
};

export default CVFactory;
